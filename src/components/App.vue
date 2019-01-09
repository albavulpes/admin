<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>

<template>
    <div class="AppComponent">
        <div class="appLayoutContainer d-flex h-100">
            <div class="col-auto p-0">
                <MainNav></MainNav>
            </div>
            <div class="col p-0 appContentContainer">
                <div class="viewContainer">
                    <router-view></router-view>
                </div>

                <FooterNav></FooterNav>
            </div>
        </div>
    </div>
</template>