import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {AuthService} from '@albavulpes/ui-core/dist/services/auth/AuthService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

@Component
export default class extends Vue {

    @Require()
    AuthService: AuthService;

    @Require()
    LoaderService: LoaderService;

    async beforeRouteEnter(to: any, from: any, next: any) {
        next(async (vm: this) => {
            vm.LoaderService.show();

            try {
                await vm.AuthService.logout();
            }
            catch (error) {
            }

            vm.$router.replace({
                name: 'auth.login',
                replace: true
            });

            vm.LoaderService.hide();
        });
    }
}