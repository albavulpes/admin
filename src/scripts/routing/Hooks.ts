import VueRouter from 'vue-router';
import {Component} from 'vue-property-decorator';
import {Container} from 'typedi';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
]);

export function init(router: VueRouter) {
    authGuardHook(router);
    toastClearHook(router);
}

function authGuardHook(router: VueRouter) {
    router.beforeEach(async (to, from, next) => {
        const identityStore = Container.get(IdentityStore);
        await identityStore.fetchIdentity();

        const needsAuth = (to.meta.authorize === true) && !identityStore.IsAuthenticated;

        if (needsAuth) {
            return next({
                name: 'auth.login',
                replace: true
            });
        }

        next();
    });
}

function toastClearHook(router: VueRouter) {
    router.beforeEach(async (to, from, next) => {
        const toastService = Container.get(ToastService);
        await toastService.clear();

        next();
    });
}