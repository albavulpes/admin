import {RouteConfig} from 'vue-router';

import Manage from '../../../components/views/Manage/Manage.vue';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicArcsViewer from '../../../components/views/Comics/ComicViewer/ComicArcsViewer/ComicArcsViewer.vue';

export default [
    {
        path: '/manage',
        component: Manage
    },
    {
        name: 'comics',
        path: '/comics',
        component: Comics
    },
    {
        name: 'comic.new',
        path: '/comic/new',
        component: ComicViewer
    },
    {
        name: 'comic.id',
        path: '/comic/:ComicId',
        component: ComicViewer,
        props: true
    },
    {
        name: 'comic.arcs',
        path: '/comic/:ComicId/arcs',
        component: ComicArcsViewer,
        props: true
    }
] as RouteConfig[];