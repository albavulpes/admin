<script lang="ts" src="./MediaAddButton.ts"></script>
<style lang="scss" src="./MediaAddButton.scss"></style>

<template>
    <MediaCard class="MediaAddButtonComponent btn btn-block btn-light">
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="">
                <i class="mdi mdi-48px mdi-plus"></i>

                <p class="h5 mt-2">
                    <slot></slot>
                </p>
            </div>
        </div>
    </MediaCard>
</template>