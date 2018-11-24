<script lang="ts" src="./Home.ts"></script>

<template>
    <div class="container">
        <h1>Welcome back, {{IdentityStore.UserName}}</h1>
        <h3>Your email is: {{Email}}</h3>

        <button type="button" class="btn btn-primary" @click="LogOut">
            Log out!
        </button>
    </div>
</template>

