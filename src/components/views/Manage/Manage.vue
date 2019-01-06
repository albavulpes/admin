<script lang="ts" src="./Manage.ts"></script>

<template>
    <div class="ManageComponent">
        <router-view
            :Comic="ComicId"
            :Arc="ArcId"
            :Chapter="ChapterId"
            :Page="PageId"
        ></router-view>
    </div>
</template>