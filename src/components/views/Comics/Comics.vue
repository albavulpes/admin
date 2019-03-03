<script lang="ts" src="./Comics.ts"></script>
<style lang="scss" src="./Comics.scss"></style>

<template>
    <div class="ComicsComponent">
        <h1>Your Comics</h1>

        <hr>

        <div class="row px-2">
            <div v-for="item in Comics" :key="item.Id">
                <MediaCard :Image="item.CoverImage.FullSize" :to="{name: 'manage.comic', params: {ComicId: item.Id}}">
                    <template slot="title">
                        {{item.Title}}
                    </template>
                    <template slot="content">
                        {{item.ChaptersCount}} Chapters
                    </template>
                    <template slot="badge" v-if="item.IsPublished">
                        Published
                    </template>
                </MediaCard>
            </div>
            <div>
                <MediaAddButton :to="{name: 'manage.comic.new'}">
                    Add Comic
                </MediaAddButton>
            </div>
        </div>
    </div>
</template>