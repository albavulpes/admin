<script lang="ts" src="./MediaAddButton.ts"></script>
<style lang="scss" src="./MediaAddButton.scss"></style>

<template>
    <b-button variant="light" block class="MediaAddButtonComponent card d-flex justify-content-center align-items-center" @click="ButtonClick" :to="to">
        <div>
            <i class="mdi mdi-48px mdi-plus"></i>

            <p class="h5 mt-2">
                <slot></slot>
            </p>
        </div>
    </b-button>
</template>