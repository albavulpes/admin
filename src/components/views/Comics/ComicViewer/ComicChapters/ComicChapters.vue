<script lang="ts" src="./ComicChapters.ts"></script>

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

            <MediaCollection :MediaItems="chapterGroup.Chapters" @media:selected="ChapterSelected" @media:add="AddChapter">
                <template slot="content" slot-scope="{item}">
                    {{item.PagesCount}} Pages
                </template>

                <template slot="add-button-content">
                    Add Chapter
                </template>
            </MediaCollection>
        </div>
    </div>
</template>