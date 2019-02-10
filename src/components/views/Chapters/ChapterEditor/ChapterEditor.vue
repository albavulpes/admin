<script lang="ts" src="./ChapterEditor.ts"></script>

<template>
    <div class="ChapterEditorComponent">
        <h1>
            <template v-if="IsCreateMode">
                Let's create a new chapter for your comic!
            </template>
            <template v-else>
                {{FormData.Title}}
            </template>
        </h1>

        <b-form @submit.prevent="SubmitForm">
            <div class="row mt-3">
                <div class="col-4">
                    <section class="py-3">
                        <ImageUploader v-model="FormData.CoverImage.FullSize">
                            Add a cover image
                        </ImageUploader>
                    </section>
                </div>
                <div class="col-8">
                    <section class="py-3">
                        <h4 class="text-black-50 mb-4">
                            Chapter Details
                        </h4>

                        <b-form-group label="Title">
                            <b-form-input type="text" placeholder="The title of your chapter" v-model="FormData.Title"></b-form-input>
                        </b-form-group>

                        <b-form-group label="Author">
                            <b-form-input type="text" placeholder="The author of your chapter" v-model="FormData.Author"></b-form-input>
                        </b-form-group>

                        <b-form-group label="Description">
                            <b-form-textarea rows="3" placeholder="A short description of your chapter" v-model="FormData.Description"></b-form-textarea>
                        </b-form-group>
                    </section>

                    <section class="py-3">
                        <h4 class="text-black-50 mb-4">
                            Chapter Metadata
                        </h4>

                        <b-form-group label="Publish Date">
                            <b-form-input type="text" placeholder="Publish date for your chapter" v-model="FormData.PublishDate"></b-form-input>
                        </b-form-group>
                    </section>

                    <section class="d-flex justify-content-between py-3">
                        <div>
                            <template v-if="IsCreateMode">
                                <b-button variant="light" @click="ResetForm">
                                    <i class="mdi mdi-refresh"></i>
                                    Reset Form
                                </b-button>
                            </template>
                            <template v-else>
                                <b-button variant="light" exact :to="{name: 'manage.chapter'}">
                                    <i class="mdi mdi-chevron-left"></i>
                                    Cancel
                                </b-button>
                            </template>
                        </div>
                        <div>
                            <b-button variant="primary" type="submit" class="px-5">
                                <template v-if="IsCreateMode">
                                    <i class="mdi mdi-creation"></i>
                                    Create Chapter
                                </template>
                                <template v-else>
                                    <i class="mdi mdi-content-save-outline"></i>
                                    Save Chapter
                                </template>
                            </b-button>
                        </div>
                    </section>
                </div>
            </div>
        </b-form>
    </div>
</template>