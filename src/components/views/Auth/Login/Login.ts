import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {AuthService} from '@albavulpes/ui-core/dist/services/auth/AuthService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

@Component({
    metaInfo: {
        title: 'Log In'
    }
})
export default class extends Vue {

    Form: any = {};

    @Require()
    AuthService: AuthService;

    @Require()
    ToastService: ToastService;

    @Require()
    IdentityStore: IdentityStore;

    async SubmitForm() {
        try {
            await this.AuthService.login(this.Form.Username, this.Form.Password);

            this.$router.replace({
                name: 'home'
            }, () => {
                this.ToastService.success(`Welcome back, ${this.IdentityStore.UserName}`);
            });
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                this.ToastService.error(`The username or password you provided are incorrect. Please try again.`, {
                    timeout: false
                });
            }
            else {
                this.ToastService.error(error.message);
            }
        }
    }
}