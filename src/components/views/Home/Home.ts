import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';
import {AuthService} from '@albavulpes/ui-core/dist/services/auth/AuthService';

@Component
export default class extends Vue {

    @Require()
    IdentityStore: IdentityStore;

    @Require()
    AuthService: AuthService;

    async created() {
        await this.IdentityStore.fetchIdentity();
    }

    get Email() {
        return this.IdentityStore.Email;
    }
}