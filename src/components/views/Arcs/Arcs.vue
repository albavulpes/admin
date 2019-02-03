<script lang="ts" src="./Arcs.ts"></script>

<template>
    <div class="ArcsComponent">
        <h1>Arcs for Comic</h1>

        <hr>

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