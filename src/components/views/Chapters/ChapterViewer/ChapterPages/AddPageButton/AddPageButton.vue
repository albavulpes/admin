<script lang="ts" src="./AddPageButton.ts"></script>
<style lang="scss" src="./AddPageButton.scss"></style>

<template>
    <div class="AddPageButtonComponent">
        <input class="fileInput" type="file" ref="fileInput" multiple @input="OnInput">

        <MediaAddButton @click="ChooseFile">
            Add Page
        </MediaAddButton>
    </div>
</template>