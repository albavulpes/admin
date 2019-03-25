<script lang="ts" src="./PageModal.ts"></script>
<style lang="scss" src="./PageModal.scss"></style>

<template>
    <b-modal class="PageModalComponent" :visible="!!value" @hidden="OnHidden" centered hide-header>
        <img class="pageModalImage" :src="value.CoverImage.FullSize" :alt="'Page ' + value.PageNumber">

        <template slot="modal-footer">
        </template>
    </b-modal>
</template>