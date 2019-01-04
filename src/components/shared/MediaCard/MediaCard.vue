<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <div class="MediaCardComponent">
        <slot>
            <div class="card">
                <img class="card-img-top" :src="Image" :alt="ImageAlt">
                <div class="card-body">
                    <h5 class="card-title">
                        <slot name="title"></slot>
                    </h5>
                    <p class="h6 card-text">
                        <small>
                            <slot name="content"></slot>
                        </small>
                    </p>
                </div>
            </div>
        </slot>
    </div>
</template>