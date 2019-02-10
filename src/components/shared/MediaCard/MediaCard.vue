<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <button type="button" class="MediaCardComponent btn btn-block card" @click="CardClick">
        <div class="card-img-top" :style="{'background-image': `url('${Image}')`}"></div>

        <div class="card-body text-left">
            <h5 class="card-title">
                <slot name="title"></slot>
            </h5>
            <p class="h6 card-text">
                <small>
                    <slot name="content"></slot>
                </small>
            </p>
        </div>
    </button>
</template>