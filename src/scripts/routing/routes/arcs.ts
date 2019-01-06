import {RouteConfig} from 'vue-router';

import Arcs from '../../../components/views/Arcs/Arcs.vue';

export default [
    {
        name: 'arc.id',
        path: '/arc/:ArcId',
        component: Arcs
    },
    {
        name: 'arc.new',
        path: '/arc/new',
        meta: {
            title: 'Arcs'
        },
        component: ComicViewer
    },
    {
        name: 'arc.id',
        path: '/arc/:ArcId',
        meta: {
            title: 'Arcs'
        },
        component: ComicViewer,
        props: true
    }
] as RouteConfig[];