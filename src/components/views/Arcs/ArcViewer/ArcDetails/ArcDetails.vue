<script lang="ts" src="./ArcDetails.ts"></script>

<template>
    <div class="ArcDetailsComponent">
        <div class="row">
            <div class="col-auto">
                <ImageViewer class="mb-4" :src="Arc.CoverImage.FullSize" :alt="Arc.Title"></ImageViewer>
            </div>
            <div class="col">
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                        Author
                    </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control-plaintext" placeholder="Author of your arc" readonly v-model="Arc.Author">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                        Publish Date
                    </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control-plaintext" placeholder="Not published yet" readonly :value="Arc.PublishDate | moment('LL')">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                        Description
                    </label>
                    <div class="col-sm-9">
                        <p class="form-control-plaintext" placeholder="Short description of the arc" v-html="Arc.Description"></p>
                    </div>
                </div>

                <hr>

                <div class="d-flex justify-content-end">
                    <div>
                        <b-button variant="outline-primary" :to="{name: 'manage.arc.edit'}">
                            <i class="mdi mdi-pencil"></i>
                            Edit Arc Details
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>