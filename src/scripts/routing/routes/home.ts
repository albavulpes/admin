import {RouteConfig} from 'vue-router';

import Home from '../../../components/views/Home/Home.vue';

export default {
    name: 'home',
    path: '/',
    meta: {
        title: 'Home',
        authorize: true
    },
    component: Home
} as RouteConfig;