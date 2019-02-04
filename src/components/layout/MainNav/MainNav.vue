<script lang="ts" src="./MainNav.ts"></script>
<style lang="scss" src="./MainNav.scss"></style>

<template>
    <nav class="MainNavComponent navbar-dark h-100">
        <div class="logoContainer text-center p-3">
            <img class="brandLogo m-2" src="../../../assets/images/logo_shadow.png" alt="AlbaVulpes Logo">

            <p class="h3 text-white mb-1">
                Alba Vulpes
            </p>
            <small class="text-white-50">
                Admin Panel
            </small>
        </div>

        <ul class="nav flex-column">
            <template v-if="IsLoggedIn">
                <li class="nav-item bg-secondary py-1 mb-3">
                    <a class="nav-link text-white h5">
                        <i class="mdi mdi-24px mdi-account-circle align-middle mr-1"></i>
                        {{AccountName}}
                    </a>
                </li>

                <router-link tag="li" class="nav-item" exact :to="{name: 'home'}" key="home">
                    <a class="nav-link">
                        <i class="mdi mdi-home"></i>
                        Admin Home
                    </a>
                </router-link>

                <router-link tag="li" class="nav-item" :to="{name: 'comics'}" key="comics">
                    <a class="nav-link">
                        <i class="mdi mdi-library-books"></i>
                        Comics
                    </a>
                </router-link>
            </template>

            <template v-if="!IsLoggedIn">
                <router-link tag="li" class="nav-item mt-3" :to="{name: 'auth.login'}" key="auth.login">
                    <a class="nav-link">
                        <i class="mdi mdi-login"></i>
                        Log In
                    </a>
                </router-link>
            </template>
        </ul>
    </nav>
</template>
