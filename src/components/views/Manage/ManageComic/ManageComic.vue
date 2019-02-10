<script lang="ts" src="./ManageComic.ts"></script>

<template>
    <div class="ManageComicComponent" v-if="Comic">
        <router-view :Comic="Comic" @update="FetchComic"></router-view>
    </div>
</template>