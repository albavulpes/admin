<script lang="ts" src="./Login.ts"></script>
<style lang="scss" src="./Login.scss"></style>

<template>
    <div class="LoginComponent pt-5">
        <div class="row justify-content-center">
            <div class="col loginCardContainer">
                <h1 class="text-center mb-5">
                    Welcome Back!
                </h1>

                <div class="card">
                    <div class="card-body">
                        <h2>
                            <i class="mdi mdi-login"></i>
                            Log In
                        </h2>
                        <hr>

                        <b-button variant="light" size="lg" class="d-flex w-100 justify-content-center align-items-center" @click="LoginWithGoogle">
                            <i class="mdi mdi-24px mdi-google googleIcon mr-2"></i>

                            <span class="font-weight-bold text-black-50">
                                Log In with Google
                            </span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>