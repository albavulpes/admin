import {RouteConfig} from 'vue-router';

import Login from '../../../components/views/Auth/Login/Login.vue';

const login: RouteConfig = {
    name: 'auth.login',
    path: '/auth/login',
    component: Login
};

export default [
    login
];