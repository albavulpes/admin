import {RouteConfig} from 'vue-router';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicArcsViewer from '../../../components/views/Comics/ComicViewer/ComicArcsViewer/ComicArcsViewer.vue';

export default [
    {
        name: 'comics',
        path: '/comics',
        component: Comics
    },
    {
        name: 'comics.new',
        path: '/comics/new',
        component: ComicViewer
    },
    {
        name: 'comic.id',
        path: '/comics/:ComicId',
        component: ComicViewer,
        props: true
    },
    {
        name: 'comic.arcs',
        path: '/comics/:ComicId/arcs',
        component: ComicArcsViewer,
        props: true
    }
] as RouteConfig[];