import Vue from 'vue';
import {AlbaVulpesApi} from '@albavulpes/ui-data';

declare module 'vue/types/vue' {
    interface Vue {
        readonly $http: AlbaVulpesApi;
    }
}