import {RouteConfig} from 'vue-router';

import ManageComic from '../../../../components/views/Manage/ManageComic/ManageComic.vue';

import ComicViewer from '../../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicEditor from '../../../../components/views/Comics/ComicEditor/ComicEditor.vue';
import ComicDetails from '../../../../components/views/Comics/ComicViewer/ComicDetails/ComicDetails.vue';
import ComicChapters from '../../../../components/views/Comics/ComicViewer/ComicChapters/ComicChapters.vue';
import ComicActions from '../../../../components/views/Comics/ComicViewer/ComicActions/ComicActions.vue';

export default [
    {
        name: 'manage.comic.new',
        path: '/comic/new',
        component: ComicEditor,
        props: {
            IsCreateMode: true
        },
        meta: {
            authorize: true
        }
    },
    {
        name: 'manage.comic',
        redirect: {name: 'manage.comic.details'},
        path: '/comic/:ComicId',
        component: ManageComic,
        props: true,
        meta: {
            authorize: true
        },
        children: [
            {
                path: '/',
                component: ComicViewer,
                children: [
                    {
                        name: 'manage.comic.details',
                        path: 'details',
                        component: ComicDetails
                    },
                    {
                        name: 'manage.comic.chapters',
                        path: 'chapters',
                        component: ComicChapters
                    },
                    {
                        name: 'manage.comic.actions',
                        path: 'actions',
                        component: ComicActions
                    }
                ]
            },
            {
                name: 'manage.comic.edit',
                path: 'edit',
                component: ComicEditor
            }
        ]
    }
] as RouteConfig[];