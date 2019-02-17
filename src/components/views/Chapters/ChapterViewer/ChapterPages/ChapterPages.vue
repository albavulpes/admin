<script lang="ts" src="./ChapterPages.ts"></script>

<template>
    <div class="ChapterPagesComponent">
        <div class="row">
            <div class="col-5 col-xl-4" v-for="item in Pages" :key="item.Id">
                <MediaCard :Image="item.CoverImage.FullSize">
                    <template slot="title">
                        Page {{item.PageNumber}}
                    </template>
                </MediaCard>
            </div>
            <div class="col-5 col-xl-4">
                <MediaAddButton @click="AddPages">
                    Add Page
                </MediaAddButton>
            </div>
        </div>
    </div>
</template>