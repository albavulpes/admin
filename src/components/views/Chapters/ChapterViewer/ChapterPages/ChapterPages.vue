<script lang="ts" src="./ChapterPages.ts"></script>
<style lang="scss" src="./ChapterPages.scss"></style>

<template>
    <div class="ChapterPagesComponent">
        <Draggable class="row px-2" v-model="Pages" :options="DraggableOptions" @change="OnPageOrderChange">
            <div v-for="item in Pages" :key="item.Id">
                <MediaCard
                    :class="{selected: IsSelected(item)}"
                    :Image="item.CoverImage.FullSize"
                    :Selectable="true"
                    @click="OnPageClick"
                    @selected="OnPageSelect(item)"
                >
                    <template slot="content">
                        <div class="d-flex justify-content-between">
                            <div class="text-body">
                                Page {{item.PageNumber}}
                            </div>
                            <div>
                                <b-dropdown class="pageContextMenu" variant="light" no-caret>
                                    <template slot="button-content">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </template>

                                    <b-dropdown-item>Action</b-dropdown-item>
                                    <b-dropdown-item>Another action</b-dropdown-item>
                                    <b-dropdown-item>Something else here</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </template>

                    <template slot="select">
                        <template v-if="IsSelected(item)">
                            <i class="mdi mdi-18px mdi-checkbox-marked-circle-outline"></i>
                        </template>
                        <template v-else>
                            <i class="mdi mdi-18px mdi-checkbox-blank-circle-outline"></i>
                        </template>
                    </template>

                    <template slot="badge">
                        Published
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