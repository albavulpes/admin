<script lang="ts" src="./ChapterDetails.ts"></script>

<template>
    <div class="ChapterDetailsComponent">
        <div class="row">
            <div class="col-auto">
                <ImageViewer class="mb-4" :src="Chapter.CoverImage.FullSize" :alt="Chapter.Title"></ImageViewer>
            </div>
            <div class="col">
                <div class="form-group row">
                    <label class="col-5 col-form-label">
                        Author
                    </label>
                    <div class="col">
                        <p class="form-control-plaintext">
                            {{Chapter.Author}}
                        </p>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-5 col-form-label">
                        Publish Date
                    </label>
                    <div class="col">
                        <p class="form-control-plaintext">
                            {{Chapter.PublishDate | moment('LL')}}
                        </p>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-5 col-form-label">
                        Description
                    </label>
                    <div class="col">
                        <p class="form-control-plaintext descriptionContent" v-html="Chapter.Description"></p>
                    </div>
                </div>

                <hr>

                <div class="d-flex justify-content-end">
                    <div>
                        <b-button variant="outline-primary" :to="{name: 'manage.chapter.edit'}">
                            <i class="mdi mdi-pencil"></i>
                            Edit Chapter Details
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>