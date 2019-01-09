<script lang="ts" src="./Manage.ts"></script>
<style lang="scss" src="./Manage.scss"></style>

<template>
    <div class="ManageComponent">
        <router-view
            :Comic="Comic"
            :Arc="Arc"
            :Chapter="Chapter"
        ></router-view>
    </div>
</template>