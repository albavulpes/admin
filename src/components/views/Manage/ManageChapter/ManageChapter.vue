<script lang="ts" src="./ManageChapter.ts"></script>

<template>
    <div class="ManageChapterComponent" v-if="Arc">
        <router-view :Arc="Arc" @update="FetchArc"></router-view>
    </div>
</template>