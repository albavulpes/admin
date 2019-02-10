<script lang="ts" src="./ChapterPages.ts"></script>

<template>
    <div class="ChapterPagesComponent">
        <MediaCollection :MediaItems="Pages">
            <template slot="content" slot-scope="{item}">
                {{item.ChaptersCount}} Chapters
            </template>

            <template slot="add-button-content">
                Add Page
            </template>
        </MediaCollection>
    </div>
</template>