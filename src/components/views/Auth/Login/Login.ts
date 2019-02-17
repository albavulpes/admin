import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {GoogleAuthService} from '@albavulpes/ui-core/dist/services/auth/GoogleAuthService';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

@Component({
    metaInfo: {
        title: 'Log In'
    }
})
export default class extends Vue {

    @Require()
    GoogleAuthService: GoogleAuthService;

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    @Require()
    IdentityStore: IdentityStore;

    async LoginWithGoogle() {
        this.LoaderService.show();

        try {
            await this.GoogleAuthService.loginWithGoogle();

            this.$router.replace({name: 'home'},
                () => {
                    this.ToastService.success(`Welcome back, ${this.IdentityStore.UserName}`);
                });
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                this.ToastService.error(`Could not sign in. Please try again.`, {
                    timeout: false
                });
            }
            else {
                this.ToastService.error(error.message);
            }
        }

        this.LoaderService.hide();
    }
}