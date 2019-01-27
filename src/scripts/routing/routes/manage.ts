import {RouteConfig} from 'vue-router';

import Manage from '../../../components/views/Manage/Manage.vue';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicEditor from '../../../components/views/Comics/ComicEditor/ComicEditor.vue';

export default [
    {
        path: '/manage',
        component: Manage,
        meta: {
            authorize: true
        },
        children: [
            {
                name: 'manage.comics',
                path: '/comics',
                component: Comics
            },
            {
                name: 'manage.comic.new',
                path: '/comic/new',
                component: ComicEditor
            },
            {
                name: 'manage.comic.id',
                path: '/comic/:ComicId',
                component: ComicViewer,
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
                        children: [
                            {
                                name: 'manage.chapter.new',
                                path: 'chapter/new',
                                component: ComicViewer
                            },
                            {
                                name: 'manage.chapter.id',
                                path: 'chapter/:ChapterId',
                                component: ComicViewer
                            }
                        ]
                    }
                ]
            }
        ]
    }
] as RouteConfig[];