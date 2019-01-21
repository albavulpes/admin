import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';

import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

@Component
export default class extends Vue {

    @Require()
    IdentityStore: IdentityStore;

    get IsLoggedIn() {
        return this.IdentityStore.IsAuthenticated;
    }
}