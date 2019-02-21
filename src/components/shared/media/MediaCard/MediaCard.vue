<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <b-button block variant="light" class="MediaCardComponent card d-flex flex-column" @click="CardClick" :to="to">
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

        <template v-if="$slots.badge">
            <div class="badge badge-primary p-2">
                <slot name="badge"></slot>
            </div>
        </template>
    </b-button>
</template>