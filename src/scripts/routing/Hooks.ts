import VueRouter from 'vue-router';
import {Component} from 'vue-property-decorator';
import {Container} from 'typedi';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
]);

export function init(router: VueRouter) {
    authGuardHook(router);
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