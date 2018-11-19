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
                        <h2>Log In</h2>
                        <hr>

                        <form>
                            <div class="mt-3 mb-5">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input class="form-control" id="exampleInputEmail1" type="email" placeholder="Your username or email address">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Your password">
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