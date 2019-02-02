<script lang="ts" src="./LoadingOverlay.ts"></script>
<style lang="scss" src="./LoadingOverlay.scss"></style>

<template>
    <div class="LoadingOverlayComponent" id="ml-global-loader">
        <HalfCircleSpinner :animation-duration="1000" :size="60"></HalfCircleSpinner>
    </div>
</template>