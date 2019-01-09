import Vue from 'vue';

import UiCore from '@albavulpes/ui-core';

Vue.use(UiCore, {
    http: {
        baseURL: AppConfig.ApiPath,
        withCredentials: true
    },
    toast: {
        position: 'bottomCenter',
        displayMode: 'replace',
        timeout: 5000
    }
});