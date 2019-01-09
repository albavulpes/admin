<style lang="scss" src="./MainNav.scss"></style>

<template>
    <nav class="MainNavComponent navbar-dark bg-primary">
        <div class="logoContainer text-center p-3 mb-3">
            <img class="brandLogo m-2" src="../../../assets/images/logo_shadow.png" alt="AlbaVulpes Logo">

            <p class="h3 text-white">
                Alba Vulpes
            </p>
        </div>

        <ul class="nav flex-column">
            <router-link tag="li" class="nav-item" exact :to="{name: 'home'}">
                <a class="nav-link">Home</a>
            </router-link>

            <router-link tag="li" class="nav-item" :to="{name: 'manage.comics'}">
                <a class="nav-link">Comics</a>
            </router-link>

            <div class="dropdown-divider"></div>

            <router-link tag="li" class="nav-item" :to="{name: 'auth.login'}">
                <a class="nav-link">Log In</a>
            </router-link>
        </ul>
    </nav>
</template>
