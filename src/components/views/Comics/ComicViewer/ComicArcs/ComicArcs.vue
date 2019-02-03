<script lang="ts" src="./ComicArcs.ts"></script>

<template>
    <div class="ComicArcsComponent">
        <MediaCollection :MediaItems="Arcs"
            :MediaDetailsRoute="arc => ({name: 'manage.arc', params: {ArcId: arc.Id}})"
            :AddMediaRoute="{name: 'manage.arc.new'}"
        >
            <template slot="content" slot-scope="{item}">
                {{item.ChaptersCount}} Chapters
            </template>

            <template slot="add-button-content">
                Add Arc
            </template>
        </MediaCollection>
    </div>
</template>