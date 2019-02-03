<script lang="ts" src="./MediaCollection.ts"></script>

<template>
    <div class="MediaCollectionComponent">
        <div class="row">
            <div class="col-4 col-lg-3" v-for="item in MediaItems">
                <router-link class="text-decoration-none" :to="MediaDetailsRoute(item)">
                    <MediaCard :Image="item.CoverImage.FullSize" :ImageAlt="item.Title">
                        <template slot="title">
                            <slot name="title" :item="item">
                                {{item.Title}}
                            </slot>
                        </template>
                        <template slot="content">
                            <slot name="content" :item="item"></slot>
                        </template>
                    </MediaCard>
                </router-link>
            </div>
            <div class="col-4 col-lg-3">
                <router-link class="text-decoration-none" :to="AddMediaRoute">
                    <MediaAddButton>
                        <slot name="add-button-content"></slot>
                    </MediaAddButton>
                </router-link>
            </div>
        </div>
    </div>
</template>