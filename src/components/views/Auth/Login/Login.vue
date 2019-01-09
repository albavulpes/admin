<script lang="ts" src="./Login.ts"></script>
<style lang="scss" src="./Login.scss"></style>

<template>
    <div class="LoginComponent container">
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

                        <form @submit.prevent="SubmitForm">
                            <div class="mt-3 mb-5">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input class="form-control" id="exampleInputEmail1" type="text" placeholder="Your username or email address" v-model="Form.Username">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Your password" v-model="Form.Password">
                                </div>
                            </div>

                            <button type="submit" class="btn btn-block btn-primary mt-4">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>