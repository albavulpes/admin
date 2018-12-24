<script lang="ts" src=./Comics.ts></script>

<template>
    <div class="ComicsComponent container">
        <h1>Your Comics</h1>

        <hr>

        <div class="row comicItems">
            <div class="col-6 col-md-2" v-for="comic in Comics">
                <div class="card comicItem">
                    <img :src="comic.CoverImage.Thumbnail" :alt="comic.Title" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{comic.Title}}
                        </h5>
                        <p class="h6 card-text">
                            {{comic.ArcsCount}} Arcs
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-2">
                <button type="button" class="btn btn-block btn-light comicAddItem h-100">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="text-center">
                            <i class="mdi mdi-48px mdi-plus"></i>

                            <p class="h5 mt-2">
                                Add Comic
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>