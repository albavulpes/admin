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
                <b-dropdown variant="primary" right>
                    <template slot="button-content">
                        <i class="mdi mdi-24px mdi-account-circle mr-1"></i>
                    </template>

                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </div>
</template>