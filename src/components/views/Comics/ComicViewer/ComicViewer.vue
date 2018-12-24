<script lang="ts" src="./ComicViewer.ts"></script>
<style lang="scss" src="./ComicViewer.scss"></style>

<template>
    <div class="ComicViewerComponent container" v-if="Comic">
        <div>
            <router-link class="btn btn-outline-primary" :to="{name: 'comics'}">
                <i class="mdi mdi-arrow-left"></i>
                Back to Comics
            </router-link>
        </div>

        <hr>

        <div class="form-group">
            <input type="text" class="form-control form-control-lg comicTitle editableField" placeholder="Comic Title" v-model="Comic.Title">
        </div>

        <div class="card">
            <div class="card-body">
                <pre>{{Comic}}</pre>
            </div>
        </div>
    </div>
</template>