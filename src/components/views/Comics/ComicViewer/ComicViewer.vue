<script lang="ts" src="./ComicViewer.ts"></script>
<style lang="scss" src="./ComicViewer.scss"></style>

<template>
    <div class="ComicViewerComponent" v-if="Comic">
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

        <form @submit.prevent="SubmitForm">
            <div class="pt-4">
                <div class="row comicEditor">
                    <div class="col-xs-12 col-md coverContainer">
                        <img class="img-fluid mb-4" :src="Comic.CoverImage.FullSize" :alt="Comic.Title">
                    </div>
                    <div class="col">
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">
                                Author
                            </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" placeholder="Author of your comic" readonly v-model="Comic.Author">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">
                                Release Date
                            </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" placeholder="Author of your comic" readonly :value="Comic.ReleaseDate | moment('LL')">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">
                                Description
                            </label>
                            <div class="col-sm-10">
                                <p class="form-control-plaintext" placeholder="Short description of the comic" v-html="Comic.Description"></p>
                            </div>
                        </div>

                        <hr>

                        <div class="mt-5">
                            <h2>Arcs</h2>
                        </div>
                        <div class="row comicItems">
                            <div class="col-6 col-md-4 col-lg-3 col-xxl-2" v-for="arc in Arcs">
                                <router-link class="text-decoration-none" :to="{name: 'arc.id', params: {ArcId: arc.Id}}">
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

                        <div class="d-flex justify-content-end mt-5">
                            <div>
                                <button type="submit" class="btn btn-primary">
                                    <i class="mdi mdi-content-save-outline"></i>
                                    Save Comic
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>