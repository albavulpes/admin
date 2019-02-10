<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <button type="button" class="MediaCardComponent btn btn-block card d-flex flex-column" @click="CardClick">
        <div class="card-img-top" :style="{'background-image': `url('${Image}')`}"></div>

        <div class="card-body text-left" v-if="$slots.body || $slots.title || $slots.content">
            <slot name="body">
                <h5 class="card-title" v-if="$slots.title">
                    <slot name="title"></slot>
                </h5>
                <p class="h6 card-text" v-if="$slots.content">
                    <small>
                        <slot name="content"></slot>
                    </small>
                </p>
            </slot>
        </div>
    </button>
</template>