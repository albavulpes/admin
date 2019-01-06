<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent container">
        <h1>Your Comics</h1>

        <hr>

        <div class="row">
            <div class="col-6 col-md-4 col-lg-3 col-xxl-2" v-for="comic in Comics">
                <router-link class="text-decoration-none" :to="{name: 'comic.id', params: {ComicId: comic.Id}}">
                    <MediaCard :Image="comic.CoverImage.Thumbnail" :ImageAlt="comic.Title">
                        <template slot="title">
                            {{comic.Title}}
                        </template>
                        <template slot="content">
                            {{comic.ArcsCount}} Arcs
                        </template>
                    </MediaCard>
                </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-3 col-xxl-2">
                <router-link class="text-decoration-none" :to="{name: 'comics.new'}">
                    <MediaAddButton>
                        Add Comic
                    </MediaAddButton>
                </router-link>
            </div>
        </div>
    </div>
</template>