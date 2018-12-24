<script lang="ts" src=./Comics.ts></script>
<style lang="scss" src="./Comic.scss"></style>

<template>
    <div class="ComicsComponent container">
        <h1>Your Comics</h1>

        <hr>

        <div class="row comicItems">
            <div class="col-6 col-md-2" v-for="comic in Comics">
                <router-link class="card comicItem" :to="{name: 'comics.id', params: {ComicId: comic.Id}}">
                    <img class="card-img-top" :src="comic.CoverImage.Thumbnail" :alt="comic.Title">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{comic.Title}}
                        </h5>
                        <p class="h6 card-text">
                            {{comic.ArcsCount}} Arcs
                        </p>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-md-2">
                <router-link class="btn btn-block btn-light comicAddItem h-100" :to="{name: 'comics.new'}">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="">
                            <i class="mdi mdi-48px mdi-plus"></i>

                            <p class="h5 mt-2">
                                Add Comic
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>