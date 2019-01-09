import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {AuthService} from '@albavulpes/ui-core/dist/services/auth/AuthService';

@Component
export default class extends Vue {

    @Require()
    AuthService: AuthService;

    async beforeRouteEnter(to: any, from: any, next: any) {
        await this.AuthService.logout();

        next({
            name: 'home',
            replace: true
        });
    }
}