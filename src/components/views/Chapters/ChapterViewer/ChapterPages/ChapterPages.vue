<script lang="ts" src="./ChapterPages.ts"></script>
<style lang="scss" src="./ChapterPages.scss"></style>

<template>
    <div class="ChapterPagesComponent">
        <Draggable class="row px-2" v-model="Pages" :options="DraggableOptions" @change="OnPageOrderChange">
            <div v-for="item in Pages" :key="item.Id">
                <MediaCard :Image="item.CoverImage.FullSize">
                    <template slot="content">
                        <div class="d-flex justify-content-between">
                            <div>
                                Page {{item.PageNumber}}
                            </div>
                            <div>

                            </div>
                        </div>
                    </template>
                </MediaCard>
            </div>
            <div class="nodrag" key="MediaAddButton">
                <MediaAddButton @click="AddPages">
                    Add Page
                </MediaAddButton>
            </div>
        </Draggable>
    </div>
</template>