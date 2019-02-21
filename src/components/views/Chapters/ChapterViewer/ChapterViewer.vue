<script lang="ts" src="./ChapterViewer.ts"></script>

<template>
    <div class="ChapterViewerComponent" v-if="Chapter">
        <h1 class="mx-3 mb-5">
            {{Chapter.Title}}
        </h1>

        <b-nav tabs class="comicViewerTabs">
            <b-nav-item :to="{name: 'manage.chapter.details'}">
                <i class="mdi mdi-information-variant"></i>
                Details
            </b-nav-item>
            <b-nav-item :to="{name: 'manage.chapter.pages'}">
                <i class="mdi mdi-book-open-page-variant"></i>
                Pages ({{Chapter.PagesCount}})
            </b-nav-item>
            <b-nav-item :to="{name: 'manage.chapter.actions'}">
                <i class="mdi mdi-settings"></i>
                Actions
            </b-nav-item>
        </b-nav>

        <div class="pt-4">
            <router-view :Chapter="Chapter"></router-view>
        </div>
    </div>
</template>