<script lang="ts" src="./UploadImageButton.ts"></script>
<style lang="scss" src="./UploadImageButton.scss"></style>

<template>
    <div class="UploadImageButtonComponent">
        <MediaAddButton @click="ChooseFile">
            <slot></slot>
        </MediaAddButton>

        <input class="fileInput" type="file" ref="fileInput" @input="StartUpload">
    </div>
</template>