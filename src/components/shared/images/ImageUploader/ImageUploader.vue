<script lang="ts" src="./ImageUploader.ts"></script>
<style lang="scss" src="./ImageUploader.scss"></style>

<template>
    <div class="ImageUploaderComponent">
        <input class="fileInput" type="file" ref="fileInput" @input="StartUpload">

        <div class="imageWrapper">
            <LoadingOverlay :class="{shown: IsLoading}"></LoadingOverlay>

            <template v-if="value">
                <ImageViewer :src="value" alt="Uploaded Image"></ImageViewer>
            </template>
            <template v-else>
                <MediaAddButton @click="ChooseFile">
                    <slot></slot>
                </MediaAddButton>
            </template>
        </div>

        <template v-if="value">
            <div class="d-flex justify-content-center mt-3">
                <b-button variant="outline-secondary" size="sm" @click="ChooseFile">
                    <i class="mdi mdi-pencil"></i>
                    Change Image
                </b-button>
            </div>
        </template>
    </div>
</template>