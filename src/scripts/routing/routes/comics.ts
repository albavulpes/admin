import {RouteConfig} from 'vue-router';

import Comics from '../../../components/views/Comics/Comics.vue';

const comics: RouteConfig = {
    name: 'comics',
    path: '/comics',
    meta: {
        title: 'Comics'
    },
    component: Comics
};

export default [
    comics
];