<script lang="ts" src="./ManageChapter.ts"></script>

<template>
    <div class="ManageChapterComponent" v-if="Chapter">
        <router-view :Chapter="Chapter" @update="FetchChapter"></router-view>
    </div>
</template>