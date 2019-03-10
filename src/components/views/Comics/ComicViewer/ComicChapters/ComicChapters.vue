<script lang="ts" src="./ComicChapters.ts"></script>

<template>
    <div class="ComicChaptersComponent">
        <Draggable v-model="ChapterGroups" filter=".nodrag" animation="250">
            <div v-for="chapterGroup in ChapterGroups" :class="{nodrag: !chapterGroup.Arc}">
                <h4 class="my-3">
                    <template v-if="chapterGroup.Arc">
                        {{chapterGroup.Arc.Title}}
                    </template>
                    <template v-else>
                        <span class="text-black-50 font-italic">
                            Unassigned Arc
                        </span>
                    </template>
                </h4>

                <Draggable class="row px-2" v-model="chapterGroup.Chapters" filter=".nodrag" animation="250" group="arcs">
                    <div v-for="item in chapterGroup.Chapters" :key="item.Id">
                        <MediaCard :Image="item.CoverImage.FullSize" :to="{name: 'manage.chapter', params: {ChapterId: item.Id}}">
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
            </div>
        </Draggable>
    </div>
</template>