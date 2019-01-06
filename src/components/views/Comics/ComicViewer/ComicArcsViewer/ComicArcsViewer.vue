<script lang="ts" src="./ComicArcsViewer.ts"></script>

<template>
    <div class="ComicArcsViewComponent container">
        <div class="d-flex align-items-end justify-content-between">
            <h1>
                {{Comic.Title}}

                <span class="text-primary ml-5">{{Comic.ArcsCount}} Arcs</span>
            </h1>
        </div>

        <hr>

        <div class="row">
            <div class="col-6 col-md-4 col-lg-3 col-xxl-2" v-for="arc in Arcs">
                <router-link class="text-decoration-none" :to="{name: 'arcs.id', params: {ArcId: arc.Id}}">
                    <MediaCard :Image="arc.CoverImage.Thumbnail" :ImageAlt="arc.Title">
                        <template slot="title">
                            {{arc.Title}}
                        </template>
                        <template slot="content">
                            {{arc.ChaptersCount}} Chapters
                        </template>
                    </MediaCard>
                </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-3 col-xxl-2">
                <router-link class="text-decoration-none" :to="{name: 'arcs.new'}">
                    <MediaAddButton>
                        Add Arc
                    </MediaAddButton>
                </router-link>
            </div>
        </div>
    </div>
</template>