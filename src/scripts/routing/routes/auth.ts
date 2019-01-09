import {RouteConfig} from 'vue-router';

import Login from '../../../components/views/Auth/Login/Login.vue';
import Logout from '../../../components/views/Auth/Logout/Logout';

const login: RouteConfig = {
    name: 'auth.login',
    path: '/auth/login',
    component: Login
};

const logout: RouteConfig = {
    name: 'auth.logout',
    path: '/auth/logout',
    component: Logout
};

export default [
    login,
    logout
];