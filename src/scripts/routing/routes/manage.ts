import {RouteConfig} from 'vue-router';

import Manage from '../../../components/views/Manage/Manage.vue';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicArcsViewer from '../../../components/views/Comics/ComicViewer/ComicArcsViewer/ComicArcsViewer.vue';

export default [
    {
        path: '/manage',
        component: Manage,
        children: [
            {
                name: 'manage.comics',
                path: '/comics',
                component: Comics
            },
            {
                name: 'manage.comic.new',
                path: '/comic/new',
                component: ComicViewer
            },
            {
                name: 'manage.comic.id',
                path: '/comic/:ComicId',
                component: ComicViewer,
                props: true,
                children: [
                    {
                        name: 'manage.arc.new',
                        path: 'arc/new',
                        component: ComicViewer
                    },
                    {
                        name: 'manage.arc.id',
                        path: 'arc/:ArcId',
                        component: ComicViewer,
                        props: true,
                        children: [
                            {
                                name: 'manage.chapter.new',
                                path: 'chapter/new',
                                component: ComicViewer
                            },
                            {
                                name: 'manage.chapter.id',
                                path: 'chapter/:ChapterId',
                                component: ComicViewer,
                                props: true
                            },
                        ]
                    },
                ]
            },
        ]
    }
] as RouteConfig[];