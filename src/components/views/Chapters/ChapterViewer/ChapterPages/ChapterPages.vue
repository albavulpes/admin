<script lang="ts" src="./ChapterPages.ts"></script>

<template>
    <div class="ChapterPagesComponent">
        <MediaCollection :MediaItems="Pages" @media:add="AddPages">
            <template slot="title" slot-scope="{item}">
                Page {{item.PageNumber}}
            </template>

            <template slot="add-button-content">
                Add Page
            </template>
        </MediaCollection>
    </div>
</template>