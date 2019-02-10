<script lang="ts" src="./ChapterViewer.ts"></script>

<template>
    <div class="ArcViewerComponent" v-if="Arc">
        <h1 class="mx-3 mb-5">
            {{Arc.Title}}
        </h1>

        <b-nav tabs class="comicViewerTabs">
            <b-nav-item :to="{name: 'manage.arc.details'}">
                <i class="mdi mdi-information-variant"></i>
                Details
            </b-nav-item>
            <b-nav-item :to="{name: 'manage.arc.chapters'}">
                <i class="mdi mdi-book-open-page-variant"></i>
                Chapters
            </b-nav-item>
            <b-nav-item :to="{name: 'manage.arc.actions'}">
                <i class="mdi mdi-settings"></i>
                Actions
            </b-nav-item>
        </b-nav>

        <div class="pt-4">
            <router-view :Arc="Arc"></router-view>
        </div>
    </div>
</template>