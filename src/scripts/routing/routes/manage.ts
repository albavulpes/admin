import {RouteConfig} from 'vue-router';

import Manage from '../../../components/views/Manage/Manage.vue';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicEditor from '../../../components/views/Comics/ComicEditor/ComicEditor.vue';
import ComicDetails from '../../../components/views/Comics/ComicViewer/ComicDetails/ComicDetails.vue';
import ComicArcs from '../../../components/views/Comics/ComicViewer/ComicArcs/ComicArcs.vue';
import ComicActions from '../../../components/views/Comics/ComicViewer/ComicActions/ComicActions.vue';

import ArcEditor from '../../../components/views/Arcs/ArcEditor/ArcEditor.vue';
import ArcViewer from '../../../components/views/Arcs/ArcViewer/ArcViewer.vue';
import ArcActions from '../../../components/views/Arcs/ArcViewer/ArcActions/ArcActions.vue';
import ArcChapters from '../../../components/views/Arcs/ArcViewer/ArcChapters/ArcChapters.vue';
import ArcDetails from '../../../components/views/Arcs/ArcViewer/ArcDetails/ArcDetails.vue';

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
                name: 'manage.comic',
                path: '/comic/:ComicId',
                redirect: {name: 'manage.comic.details'},
                component: ComicViewer,
                children: [
                    {
                        name: 'manage.comic.details',
                        path: 'details',
                        component: ComicDetails
                    },
                    {
                        name: 'manage.comic.arcs',
                        path: 'arcs',
                        component: ComicArcs
                    },
                    {
                        name: 'manage.comic.actions',
                        path: 'actions',
                        component: ComicActions
                    }
                ]
            },
            {
                name: 'manage.comic.new',
                path: '/comic/new',
                component: ComicEditor,
                props: {
                    IsCreateMode: true
                }
            },
            {
                name: 'manage.comic.edit',
                path: '/comic/:ComicId/edit',
                component: ComicEditor
            },
            {
                name: 'manage.arc.new',
                path: '/comic/:ComicId/arc/new',
                component: ArcEditor,
                props: {
                    IsCreateMode: true
                }
            },
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
            },
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
] as RouteConfig[];