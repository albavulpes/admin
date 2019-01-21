<script lang="ts" src="./ComicEditor.ts"></script>
<style lang="scss" src="./ComicEditor.scss"></style>

<template>
    <div class="ComicEditorComponent">
        <h1>Let's create a new comic!</h1>

        <b-form @submit.prevent="SubmitForm">
            <div class="row mt-3">
                <div class="col-4">
                    <section class="py-3">
                        <MediaAddButton class="addCoverImageButton">
                            Add a cover image
                        </MediaAddButton>
                    </section>
                </div>
                <div class="col-8">
                    <section class="py-3">
                        <h4 class="text-black-50 mb-4">
                            Comic Details
                        </h4>

                        <b-form-group label="Title">
                            <b-form-input type="text" placeholder="The title of your comic" v-model="Comic.Title"></b-form-input>
                        </b-form-group>

                        <b-form-group label="Author">
                            <b-form-input type="text" placeholder="The author of your comic" v-model="Comic.Author"></b-form-input>
                        </b-form-group>

                        <b-form-group label="Description">
                            <b-form-textarea rows="3" placeholder="A short description of your comic" v-model="Comic.Description"></b-form-textarea>
                        </b-form-group>
                    </section>

                    <section class="py-3">
                        <h4 class="text-black-50 mb-4">
                            Comic Metadata
                        </h4>

                        <b-form-group label="Publish Date">
                            <b-form-input type="text" placeholder="Publish date for your comic" v-model="Comic.ReleaseDate"></b-form-input>
                        </b-form-group>
                    </section>

                    <section class="d-flex justify-content-between py-3">
                        <div>
                            <b-button variant="light" @click="ResetForm">
                                <i class="mdi mdi-refresh"></i>
                                Reset Form
                            </b-button>
                        </div>
                        <div>
                            <b-button variant="primary" type="submit" class="px-5">
                                <i class="mdi mdi-creation"></i>
                                Create Comic
                            </b-button>
                        </div>
                    </section>
                </div>
            </div>
        </b-form>
    </div>
</template>