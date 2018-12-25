<script lang="ts" src="./ComicViewer.ts"></script>
<style lang="scss" src="./ComicViewer.scss"></style>

<template>
    <div class="ComicViewerComponent container" v-if="Comic">
        <div>
            <router-link class="btn btn-outline-primary" :to="{name: 'comics'}">
                <i class="mdi mdi-arrow-left"></i>
                Back to Comics
            </router-link>
        </div>

        <hr>

        <div class="row comicEditor" :class="{editMode: !IsCreateMode}">
            <div class="col-12 col-md-5 col-lg-4">
                <img class="img-fluid mb-4" :src="Comic.CoverImage.FullSize" :alt="Comic.Title">
            </div>
            <div class="col">
                <form @submit.prevent="SubmitForm">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control form-control-lg editableField" placeholder="Title for your comic" v-model="Comic.Title">
                    </div>
                    <div class="form-group">
                        <label>Author</label>
                        <input type="text" class="form-control editableField" placeholder="Author of your comic" v-model="Comic.Author">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control editableField" placeholder="Short description of the comic" rows="4" v-model="Comic.Description"></textarea>
                    </div>

                    <div class="row justify-content-end">
                        <div class="col-12 col-lg-6">
                            <button type="submit" class="btn btn-block btn-primary">
                                <i class="mdi mdi-content-save-outline"></i>
                                Save Comic
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>