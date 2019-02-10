<script lang="ts" src="./MediaAddButton.ts"></script>
<style lang="scss" src="./MediaAddButton.scss"></style>

<template>
    <b-button variant="light" block class="MediaAddButtonComponent" @click="ButtonClick">
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="">
                <i class="mdi mdi-48px mdi-plus"></i>

                <p class="h5 mt-2">
                    <slot></slot>
                </p>
            </div>
        </div>
    </b-button>
</template>