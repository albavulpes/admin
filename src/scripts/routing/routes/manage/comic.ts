import {RouteConfig} from 'vue-router';

import ManageComic from '../../../../components/views/Manage/ManageComic/ManageComic.vue';

import ComicViewer from '../../../../components/views/Comics/ComicViewer/ComicViewer.vue';
import ComicEditor from '../../../../components/views/Comics/ComicEditor/ComicEditor.vue';
import ComicDetails from '../../../../components/views/Comics/ComicViewer/ComicDetails/ComicDetails.vue';
import ComicArcs from '../../../../components/views/Comics/ComicViewer/ComicArcs/ComicArcs.vue';
import ComicActions from '../../../../components/views/Comics/ComicViewer/ComicActions/ComicActions.vue';

export default [
    {
        name: 'manage.comic',
        redirect: {name: 'manage.comic.details'},
        path: '/comic/:ComicId',
        component: ManageComic,
        props: true,
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
                name: 'manage.comic.edit',
                path: 'edit',
                component: ComicEditor
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
    }
] as RouteConfig[];