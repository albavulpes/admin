<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent">
        <h1>Your Comics</h1>

        <hr>

        <MediaCollection :MediaItems="Comics"
            :MediaDetailsRoute="comic => ({name: 'manage.comic', params: {ComicId: comic.Id}})"
            :AddMediaRoute="{name: 'manage.comic.new'}"
        >
            <template slot="content" slot-scope="{item}">
                {{item.ArcsCount}} Arcs
            </template>

            <template slot="add-button-content">
                Add Comic
            </template>
        </MediaCollection>
    </div>
</template>