import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {AuthService} from '@albavulpes/ui-core/dist/services/auth/AuthService';

@Component
export default class extends Vue {

    Form: any = {};

    @Require()
    AuthService: AuthService;

    async SubmitForm() {
        await this.AuthService.login(this.Form.Username, this.Form.Password);
    }
}