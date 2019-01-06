<script lang="ts" src="./ComicViewer.ts"></script>
<style lang="scss" src="./ComicViewer.scss"></style>

<template>
    <div class="ComicViewerComponent container" v-if="Comic">
        <form @submit.prevent="SubmitForm">
            <div class="d-flex justify-content-between">
                <div>
                    <router-link class="btn btn-outline-primary" :to="{name: 'comics'}">
                        <i class="mdi mdi-arrow-left"></i>
                        Back to Comics
                    </router-link>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-secondary">
                        <i class="mdi mdi-publish"></i>
                        Publish Comic
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="mdi mdi-content-save-outline"></i>
                        Save Comic
                    </button>
                </div>
            </div>

            <hr>

            <div class="row comicEditor">
                <div class="col-xs-12 col-md coverContainer">
                    <img class="img-fluid mb-4" :src="Comic.CoverImage.FullSize" :alt="Comic.Title">
                </div>
                <div class="col">
                    <div class="form-group">
                        <input type="text" class="form-control-plaintext h1" placeholder="Title for your comic" readonly v-model="Comic.Title">
                    </div>

                    <hr>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext" placeholder="Author of your comic" readonly v-model="Comic.Author">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Release Date</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext" placeholder="Author of your comic" readonly :value="Comic.ReleaseDate | moment('LL')">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control-plaintext" placeholder="Short description of the comic" rows="4" readonly v-model="Comic.Description"></textarea>
                        </div>
                    </div>

                    <hr>

                    <p class="h3 mb-3">
                        This comic has {{Comic.ArcsCount}} arcs
                    </p>

                    <router-link class="btn btn-secondary" :to="{name: 'comic.arcs', params: {ComicId: Comic.Id}}">
                        View Arcs
                    </router-link>

                    <!--
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
                    </div>-->

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
        </form>
    </div>
</template>