<script lang="ts" src="./ImageUploader.ts"></script>
<style lang="scss" src="./ImageUploader.scss"></style>

<template>
    <div class="ImageUploaderComponent">
        <template v-if="value">
            <img class="uploadedImage" :src="value" alt="Uploaded Image">

            <div class="d-flex justify-content-center mt-3">
                <b-button variant="outline-secondary" size="sm">
                    <i class="mdi mdi-pencil"></i>
                    Change Image
                </b-button>
            </div>
        </template>
        <template v-else>
            <UploadImageButton @input="OnImageUploaded">
                <slot></slot>
            </UploadImageButton>
        </template>
    </div>
</template>