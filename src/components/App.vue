<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>

<template>
    <div class="AppComponent">
        <div class="appLayoutContainer d-flex h-100">
            <div class="col-auto p-0">
                <MainNav></MainNav>
            </div>
            <div class="col p-0 appContentContainer">
                <TopNav></TopNav>

                <div class="viewContainer">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>

                    <LoadingOverlay id="ml-global-loader"></LoadingOverlay>
                </div>

                <FooterNav></FooterNav>
            </div>
        </div>
    </div>
</template>