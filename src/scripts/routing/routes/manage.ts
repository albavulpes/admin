import {RouteConfig} from 'vue-router';

import manageComic from './manage/comic';

import Manage from '../../../components/views/Manage/Manage.vue';

import ArcViewer from '../../../components/views/Arcs/ArcViewer/ArcViewer.vue';
import ArcActions from '../../../components/views/Arcs/ArcViewer/ArcActions/ArcActions.vue';
import ArcChapters from '../../../components/views/Arcs/ArcViewer/ArcChapters/ArcChapters.vue';
import ArcDetails from '../../../components/views/Arcs/ArcViewer/ArcDetails/ArcDetails.vue';

export default [
    ...manageComic,
    {
        path: '/manage',
        component: Manage,
        meta: {
            authorize: true
        },
        children: [
            {
                name: 'manage.arc.id',
                path: 'arc/:ArcId',
                component: ArcViewer,
                children: [
                    {
                        name: 'manage.arc.details',
                        path: 'details',
                        component: ArcDetails
                    },
                    {
                        name: 'manage.arc.chapters',
                        path: 'chapters',
                        component: ArcChapters
                    },
                    {
                        name: 'manage.arc.actions',
                        path: 'actions',
                        component: ArcActions
                    }
                ]
            }
        ]
    }
] as RouteConfig[];