import {RouteConfig} from 'vue-router';

import Arcs from '../../../components/views/Arcs/Arcs.vue';

export default [
    {
        name: 'arc.id',
        path: '/arc/:ArcId',
        component: Arcs
    },
    // {
    //     name: 'comics.new',
    //     path: '/comics/new',
    //     meta: {
    //         title: 'Comics'
    //     },
    //     component: ComicViewer
    // },
    // {
    //     name: 'comics.id',
    //     path: '/comics/:ComicId',
    //     meta: {
    //         title: 'Comics'
    //     },
    //     component: ComicViewer,
    //     props: true
    // }
] as RouteConfig[];