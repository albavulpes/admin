import {PluginObject} from 'vue';
import {AlbaVulpesApi} from '@albavulpes/ui-data';

function instantiateHttpApi() {
    return new AlbaVulpesApi({
        baseURL: AppConfig.ApiPath,
        withCredentials: true
    })
}

export default {
    install(Vue) {
        Vue.prototype.$http = instantiateHttpApi();
    }
} as PluginObject<void>;