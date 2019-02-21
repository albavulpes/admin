<script lang="ts" src="./ChapterPages.ts"></script>
<style lang="scss" src="./ChapterPages.scss"></style>

<template>
    <div class="ChapterPagesComponent">
        <Draggable class="row" v-model="Pages" :options="DraggableOptions" @change="OnPageOrderChange">
            <div class="col-5 col-xl-4" v-for="item in Pages" :key="item.Id">
                <MediaCard :Image="item.CoverImage.FullSize">
                    <template slot="content">
                        Page {{item.PageNumber}}
                    </template>
                </MediaCard>
            </div>
            <div class="col-5 col-xl-4 nodrag" key="MediaAddButton">
                <MediaAddButton @click="AddPages">
                    Add Page
                </MediaAddButton>
            </div>
        </Draggable>
    </div>
</template>