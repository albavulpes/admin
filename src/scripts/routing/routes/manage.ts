import {RouteConfig} from 'vue-router';

import manageComic from './manage/comic';
import manageArc from './manage/chapter';

import Manage from '../../../components/views/Manage/Manage.vue';

import ArcViewer from '../../../components/views/Chapters/ChapterViewer/ChapterViewer.vue';
import ArcActions from '../../../components/views/Chapters/ChapterViewer/ChapterActions/ChapterActions.vue';
import ArcChapters from '../../../components/views/Chapters/ChapterViewer/ChapterPages/ChapterPages.vue';
import ArcDetails from '../../../components/views/Chapters/ChapterViewer/ChapterDetails/ChapterDetails.vue';

export default [
    ...manageComic,
    ...manageArc,
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