import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {AuthService} from '@albavulpes/ui-core/dist/services/auth/AuthService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

@Component
export default class extends Vue {

    Form: any = {};

    @Require()
    AuthService: AuthService;

    @Require()
    ToastService: ToastService;

    @Require()
    IdentityStore: IdentityStore;

    async SubmitForm() {
        await this.AuthService.login(this.Form.Username, this.Form.Password);

        this.ToastService.success(`Welcome back, ${this.IdentityStore.UserName}`);
    }
}