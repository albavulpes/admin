<script lang="ts" src="./ArcActions.ts"></script>

<template>
    <div class="ComicActionsComponent">
        <ActionCard>
            <template slot="title">
                Publish Comic
            </template>
            <template slot="content">
                <div class="d-flex">
                    <div class="flex-shrink-1">
                        <i class="mdi mdi-18px mdi-information-outline text-primary"></i>
                    </div>
                    <div class="flex-grow-1 pl-2">
                        <p class="h5 font-weight-normal">
                            This action will publish this comic and make it available to public.
                        </p>
                        <p class="h6">
                            Note: Published content cannot be deleted. You must unpublish the piece of content before attempting to delete it.
                        </p>
                    </div>
                </div>
            </template>
            <template slot="actions">
                <b-button variant="primary">
                    <i class="mdi mdi-publish"></i>
                    Publish Comic
                </b-button>
            </template>
        </ActionCard>

        <ActionCard class="border-danger">
            <template slot="title">
                <span class="text-danger">
                    Delete Comic
                </span>
            </template>
            <template slot="content">
                <div class="d-flex">
                    <div class="flex-shrink-1">
                        <i class="mdi mdi-18px mdi-information-outline text-danger"></i>
                    </div>
                    <div class="flex-grow-1 pl-2">
                        <p class="h5 font-weight-normal">
                            This action will delete this comic forever never to be recovered again. <b></b>
                        </p>
                        <p class="h6">
                            Note: Only delete content if you absolutely need it gone.
                        </p>
                        <p class="h6">
                            Remember, just unpublish the content if you want to keep the content but not show the public yet.
                        </p>
                    </div>
                </div>
            </template>
            <template slot="actions">
                <b-button variant="outline-danger">
                    <i class="mdi mdi-delete"></i>
                    Delete Comic
                </b-button>
            </template>
        </ActionCard>
    </div>
</template>