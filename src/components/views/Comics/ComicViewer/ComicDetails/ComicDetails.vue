<script lang="ts" src="./ComicDetails.ts"></script>
<style lang="scss" src="./ComicDetails.scss"></style>

<template>
    <div class="ComicDetailsComponent">
        <div class="row">
            <div class="col-auto">
                <ImageViewer class="mb-4" :src="Comic.CoverImage.FullSize" :alt="Comic.Title"></ImageViewer>
            </div>
            <div class="col">
                <div class="form-group row">
                    <label class="col-5 col-form-label">
                        Author
                    </label>
                    <div class="col">
                        <input type="text" class="form-control-plaintext" placeholder="Author of your comic" readonly v-model="Comic.Author">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-5 col-form-label">
                        Publish Date
                    </label>
                    <div class="col">
                        <input type="text" class="form-control-plaintext" placeholder="Not published yet" readonly :value="Comic.PublishDate | moment('LL')">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-5 col-form-label">
                        Description
                    </label>
                    <div class="col">
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
</template>