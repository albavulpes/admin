<script lang="ts" src="./ChapterPages.ts"></script>
<style lang="scss" src="./ChapterPages.scss"></style>

<template>
    <div class="ChapterPagesComponent">
        <div class="d-flex justify-content-between">
            <div>
                <h3>
                    {{Pages.length}} {{Pages.length | pluralize('page')}}

                    <template v-if="SelectedPageIds.length > 0">
                        ({{SelectedPageIds.length }} selected)
                    </template>
                </h3>
            </div>

            <div class="px-3">
                <template v-if="SelectedPageIds.length > 0">
                    <b-dropdown variant="outline-primary">
                        <template slot="button-content">
                            Actions...
                        </template>

                        <b-dropdown-item @click="PublishSelectedPages">
                            <i class="mdi mdi-publish"></i>
                            Publish
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item class="text-danger">
                            <i class="mdi mdi-delete"></i>
                            Delete
                        </b-dropdown-item>
                    </b-dropdown>

                    <b-button variant="light" @click="DeselectAll">
                        <i class="mdi mdi-cancel"></i>

                        Deselect All
                    </b-button>
                </template>

                <b-button variant="light" @click="SelectAll">
                    <i class="mdi mdi-check-all"></i>
                    Select All
                </b-button>
            </div>
        </div>
        <hr>

        <Draggable class="row px-2" v-model="Pages" :options="DraggableOptions" @change="OnPageOrderChange">
            <div v-for="item in Pages" :key="item.Id">

                <!-- Page Tile-->
                <MediaCard
                    :class="{selected: IsSelected(item)}"
                    :Image="item.CoverImage.FullSize"
                    :Selectable="true"
                    @click="OnPageClick(item)"
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

                                    <b-dropdown-item>
                                        <i class="mdi mdi-publish"></i>
                                        Publish
                                    </b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item class="text-danger">
                                        <i class="mdi mdi-delete"></i>
                                        Delete
                                    </b-dropdown-item>
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

                    <template slot="badge" v-if="item.IsPublished">
                        Published
                    </template>
                </MediaCard>

            </div>

            <!-- Add Page Button -->
            <div class="nodrag" key="MediaAddButton">
                <AddPageButton @input="AddPages"></AddPageButton>
            </div>
        </Draggable>

        <template v-if="PageShown">
            <PageModal v-model="PageShown"></PageModal>
        </template>
    </div>
</template>