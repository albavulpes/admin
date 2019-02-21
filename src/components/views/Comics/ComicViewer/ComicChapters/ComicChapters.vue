<script lang="ts" src="./ComicChapters.ts"></script>
<style lang="scss" src="./ComicChapters.scss"></style>

<template>
    <div class="ComicChaptersComponent">
        <div v-for="chapterGroup in ChapterGroups">
            <h4 class="my-3">
                <template v-if="chapterGroup.Arc">
                    {{Arc.Title}}
                </template>
                <template v-else>
                    <span class="text-black-50 font-italic">
                        Unassigned Arc
                    </span>
                </template>
            </h4>

            <div class="row">
                <div class="col-5" v-for="item in chapterGroup.Chapters" :key="item.Id">
                    <MediaCard :Image="item.CoverImage.FullSize" :to="{name: 'manage.chapter', params: {ChapterId: item.Id}}">
                        <template slot="title">
                            {{item.Title}}
                        </template>
                        <template slot="content">
                            {{item.PagesCount}} Pages
                        </template>
                    </MediaCard>
                </div>
                <div class="col-5">
                    <MediaAddButton :to="{name: 'manage.chapter.new', query: {comicId: Comic.Id}}">
                        Add Chapter
                    </MediaAddButton>
                </div>
            </div>
        </div>
    </div>
</template>