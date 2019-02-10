<script lang="ts" src="./MediaCollection.ts"></script>
<style lang="scss" src="./MediaCollection.scss"></style>

<template>
    <div class="MediaCollectionComponent">
        <div class="row">
            <div class="col-4 col-xl-3" v-for="item in MediaItems">
                <MediaCard :Image="item.CoverImage.FullSize" @click="MediaItemClick(item)">
                    <template slot="title">
                        <slot name="title" :item="item">
                            {{item.Title}}
                        </slot>
                    </template>
                    <template slot="content">
                        <slot name="content" :item="item"></slot>
                    </template>
                </MediaCard>
            </div>
            <div class="col-4 col-xl-3">
                <MediaAddButton @click="AddMediaClick">
                    <slot name="add-button-content"></slot>
                </MediaAddButton>
            </div>
        </div>
    </div>
</template>