import {RouteConfig} from 'vue-router';

import Comics from '../../../components/views/Comics/Comics.vue';

export default [
    {
        name: 'comics',
        path: '/comics',
        component: Comics,
        meta: {
            authorize: true
        }
    }
] as RouteConfig[];