import Vue from 'vue';

import UiCore from '@albavulpes/ui-core';

Vue.use(UiCore, {
    http: {
        baseURL: AppConfig.ApiPath,
        withCredentials: true
    },
    toast: {
        position: 'bottomRight',
        displayMode: 'replace',
        timeout: 5000
    }
});