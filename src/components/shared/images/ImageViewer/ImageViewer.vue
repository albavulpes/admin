<script lang="ts" src="./ImageViewer.ts"></script>
<style lang="scss" src="./ImageViewer.scss"></style>

<template>
    <div class="ImageViewerComponent">
        <template v-if="src">
            <img class="img-fluid" :src="src" :alt="alt">
        </template>
        <template v-else>
            <div class="noImagePlaceholder d-flex justify-content-center align-items-center bg-light">
                <div class="text-center">
                    <i class="mdi mdi-image-filter-hdr text-black-50"></i>

                    <p class="h5">
                        No Image
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>