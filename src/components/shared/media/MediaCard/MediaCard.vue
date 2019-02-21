<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <b-button block variant="light" class="MediaCardComponent card d-flex flex-column" @click="CardClick" :to="to">
        <div class="card-img-top" :style="{'background-image': `url('${Image}')`}"></div>

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
            <div class="badge badge-primary text-uppercase py-2 px-3">
                <slot name="badge"></slot>
            </div>
        </template>
    </b-button>
</template>