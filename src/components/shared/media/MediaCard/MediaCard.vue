<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <b-button block variant="light" class="MediaCardComponent card d-flex flex-column" @click="CardClick" :to="to">
        <template v-if="Image">
            <div class="card-img-top" :style="{'background-image': `url('${Image}')`}"></div>
        </template>
        <template v-else>
            <div class="card-img-top d-flex justify-content-center align-items-center noImage">
                <p class="text-black-50">
                    <i class="mdi mdi-image-filter-hdr mdi-48px"></i>
                    <br>
                    No Cover
                </p>
            </div>
        </template>

        <div class="card-body text-left p-3" v-if="$slots.body || $slots.title || $slots.content">
            <slot name="body">
                <h5 class="card-title mt-0 mb-2" v-if="$slots.title">
                    <slot name="title"></slot>
                </h5>
                <p class="h6 card-text mb-0" v-if="$slots.content">
                    <small class="text-black-50">
                        <slot name="content"></slot>
                    </small>
                </p>
            </slot>
        </div>

        <template v-if="$slots.badge">
            <div class="badge badge-primary text-uppercase">
                <slot name="badge"></slot>
            </div>
        </template>

        <template v-if="Selectable">
            <button class="btn selectionBox" @click.stop="Select">
                <div class="visibleBox">
                    <slot name="select">
                        <i class="mdi mdi-18px mdi-checkbox-blank-circle-outline"></i>
                    </slot>
                </div>
            </button>
        </template>
    </b-button>
</template>