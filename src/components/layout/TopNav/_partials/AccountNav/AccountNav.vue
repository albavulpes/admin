<script lang="ts" src="./AccountNav.ts"></script>

<template>
    <div class="AccountNavComponent" v-if="IsLoggedIn">
        <div class="d-flex">
            <div>
                <a class="btn">
                    <i class="mdi mdi-24px mdi-settings"></i>
                </a>
            </div>

            <div>
                <b-dropdown variant="primary" right offset="-2">
                    <template slot="button-content">
                        <i class="mdi mdi-24px mdi-account-circle mr-1"></i>
                    </template>

                    <b-dropdown-item>
                        <i class="mdi mdi-account-edit mr-1"></i>
                        My Profile
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <i class="mdi mdi-account-settings-variant mr-1"></i>
                        Account Settings
                    </b-dropdown-item>

                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item :to="{name: 'auth.logout'}">
                        <i class="mdi mdi-logout mr-1"></i>
                        Log Out
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </div>
</template>