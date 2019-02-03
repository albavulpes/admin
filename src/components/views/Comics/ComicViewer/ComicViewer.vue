<script lang="ts" src="./ComicViewer.ts"></script>
<style lang="scss" src="./ComicViewer.scss"></style>

<template>
    <div class="ComicViewerComponent" v-if="Comic">
        <div class="">
            <h1 class="mx-3 mb-5">
                {{Comic.Title}}
            </h1>

            <ul class="comicViewerTabs nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <i class="mdi mdi-information-variant"></i>
                        Details
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="mdi mdi-book-open-page-variant"></i>
                        Arcs
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="mdi mdi-settings"></i>
                        Actions
                    </a>
                </li>
            </ul>
        </div>

        <div class="container-fluid">
            <div class="pt-4">
                <div class="row comicEditor">
                    <div class="col-auto coverContainer">
                        <ImageViewer class="mb-4" :src="Comic.CoverImage.FullSize" :alt="Comic.Title"></ImageViewer>
                    </div>
                    <div class="col">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">
                                Author
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control-plaintext" placeholder="Author of your comic" readonly v-model="Comic.Author">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">
                                Release Date
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control-plaintext" placeholder="No release date" readonly :value="Comic.ReleaseDate | moment('LL')">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">
                                Description
                            </label>
                            <div class="col-sm-9">
                                <p class="form-control-plaintext" placeholder="Short description of the comic" v-html="Comic.Description"></p>
                            </div>
                        </div>

                        <hr>

                        <div class="d-flex justify-content-end">
                            <div>
                                <b-button variant="outline-primary" :to="{name: 'manage.comic.edit'}">
                                    <i class="mdi mdi-pencil"></i>
                                    Edit Comic Details
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>