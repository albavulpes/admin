<script lang="ts" src="./ComicViewer.ts"></script>

<template>
    <div class="ComicViewerComponent" v-if="Comic">
        <h1 class="mx-3 mb-5">
            {{Comic.Title}}
        </h1>

        <b-nav tabs class="comicViewerTabs">
            <b-nav-item :to="{name: 'manage.comic.details'}">
                <i class="mdi mdi-information-variant"></i>
                Details
            </b-nav-item>
            <b-nav-item :to="{name: 'manage.comic.chapters'}">
                <i class="mdi mdi-book-open-page-variant"></i>
                Chapters
            </b-nav-item>
            <b-nav-item :to="{name: 'manage.comic.actions'}">
                <i class="mdi mdi-settings"></i>
                Actions
            </b-nav-item>
        </b-nav>

        <div class="pt-4">
            <router-view :Comic="Comic"></router-view>
        </div>
    </div>
</template>