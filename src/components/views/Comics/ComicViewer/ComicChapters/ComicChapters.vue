<script lang="ts" src="./ComicChapters.ts"></script>
<style lang="scss" src="./ComicChapters.scss"></style>

<template>
    <div class="ComicChaptersComponent">
        <Draggable v-model="ChapterGroups" filter=".nodrag" handle=".dragHandle" animation="250">
            <b-card no-body class="chapterGroupArc mb-5" :class="{nodrag: !chapterGroup.Arc}" v-for="chapterGroup in ChapterGroups">
                <template slot="header">
                    <div class="dragHandle" v-if="chapterGroup.Arc">
                        <i class="mdi mdi-24px mdi-drag-vertical text-black-50"></i>
                    </div>

                    <h4 class="m-0">
                        <template v-if="chapterGroup.Arc">
                            {{chapterGroup.Arc.Title}}
                        </template>
                        <template v-else>
                            <span class="text-black-50 font-italic">
                                Unassigned Arc
                            </span>
                        </template>
                    </h4>
                </template>

                <b-card-body class="pb-0">
                    <Draggable class="row px-2" v-model="chapterGroup.Chapters" filter=".nodrag" animation="250" group="arcs">
                        <div class="chapterGroupChapter" v-for="item in chapterGroup.Chapters" :key="item.Id">
                            <MediaCard :Image="item.CoverImage.FullSize" :to="{name: 'manage.chapter.details', params: {ChapterId: item.Id}}">
                                <template slot="title">
                                    {{item.Title}}
                                </template>
                                <template slot="content">
                                    {{item.PagesCount}} Pages
                                </template>
                                <template slot="badge" v-if="item.IsPublished">
                                    Published
                                </template>
                            </MediaCard>
                        </div>
                        <div class="nodrag" key="MediaAddButton">
                            <MediaAddButton :to="{name: 'manage.chapter.new', query: {comicId: Comic.Id, arcId: chapterGroup.Arc && chapterGroup.Arc.Id}}">
                                Add Chapter
                            </MediaAddButton>
                        </div>
                    </Draggable>
                </b-card-body>
            </b-card>
        </Draggable>
    </div>
</template>