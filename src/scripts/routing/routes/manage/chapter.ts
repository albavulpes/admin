import {RouteConfig} from 'vue-router';

import ManageChapter from '../../../../components/views/Manage/ManageChapter/ManageChapter.vue';

import ChapterViewer from '../../../../components/views/Chapters/ChapterViewer/ChapterViewer.vue';
import ChapterEditor from '../../../../components/views/Chapters/ChapterEditor/ChapterEditor.vue';
import ChapterDetails from '../../../../components/views/Chapters/ChapterViewer/ChapterDetails/ChapterDetails.vue';
import ChapterPages from '../../../../components/views/Chapters/ChapterViewer/ChapterPages/ChapterPages.vue';
import ChapterActions from '../../../../components/views/Chapters/ChapterViewer/ChapterActions/ChapterActions.vue';

export default [
    {
        name: 'manage.chapter',
        redirect: {name: 'manage.chapter.details'},
        path: '/chapter/:ChapterId',
        component: ManageChapter,
        props: true,
        children: [
            {
                path: '/',
                component: ChapterViewer,
                children: [
                    {
                        name: 'manage.chapter.details',
                        path: 'details',
                        component: ChapterDetails
                    },
                    {
                        name: 'manage.chapter.pages',
                        path: 'pages',
                        component: ChapterPages
                    },
                    {
                        name: 'manage.chapter.actions',
                        path: 'actions',
                        component: ChapterActions
                    }
                ]
            },
            {
                name: 'manage.chapter.edit',
                path: 'edit',
                component: ChapterEditor
            }
        ]
    },
    {
        name: 'manage.chapter.new',
        path: '/chapter/new',
        component: ChapterEditor,
        props: (route) => {
            return {
                ComicId: route.query['comicId'],
                IsCreateMode: true
            };
        }
    }
] as RouteConfig[];