import {RouteConfig} from 'vue-router';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';

export default [
    {
        name: 'comics',
        path: '/comics',
        meta: {
            title: 'Comics'
        },
        component: Comics
    },
    {
        name: 'comics.new',
        path: '/comics/new',
        meta: {
            title: 'Comics'
        },
        component: ComicViewer
    },
    {
        name: 'comics.id',
        path: '/comics/:ComicId',
        meta: {
            title: 'Comics'
        },
        component: ComicViewer,
        props: true
    }
] as RouteConfig[];