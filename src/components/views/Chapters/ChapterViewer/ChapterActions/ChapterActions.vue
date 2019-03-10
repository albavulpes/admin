<script lang="ts" src="./ChapterActions.ts"></script>

<template>
    <div class="ChapterActionsComponent">
        <ActionCard>
            <template slot="title">
                <template v-if="HasPublishDate">
                    <template v-if="IsPublished">
                        Chapter was published on <b>{{Chapter.PublishDate | moment('LLL')}}</b>
                    </template>
                    <template v-else>
                        Chapter will publish on <b>{{Chapter.PublishDate | moment('LLL')}}</b>
                    </template>
                </template>
                <template v-else>
                    Publish Chapter
                </template>
            </template>
            <template slot="content">
                <div class="d-flex">
                    <div class="flex-shrink-1">
                        <i class="mdi mdi-18px mdi-information-outline text-primary"></i>
                    </div>
                    <div class="flex-grow-1 pl-2">
                        <p class="h5 font-weight-normal">
                            <template v-if="HasPublishDate">
                                <template v-if="IsPublished">
                                    This action will unpublish this chapter and make it unavailable to public.
                                </template>
                                <template v-else>
                                    This action will publish this chapter immediately, ignoring the current publish date, and make it available to public.
                                </template>
                            </template>
                            <template v-else>
                                This action will publish this chapter and make it available to public.
                            </template>
                        </p>
                        <p class="h6">
                            Note: Published content cannot be deleted. You must unpublish the piece of content before attempting to delete it.
                        </p>
                    </div>
                </div>
            </template>
            <template slot="actions">
                <template v-if="!HasPublishDate || !IsPublished">
                    <b-button variant="primary" @click="PublishChapter">
                        <i class="mdi mdi-publish"></i>
                        Publish Chapter
                    </b-button>
                </template>
                <template v-else>
                    <b-button variant="outline-primary" @click="UnpublishChapter">
                        <i class="mdi mdi-eye-off"></i>
                        Unpublish Chapter
                    </b-button>
                </template>
            </template>
        </ActionCard>

        <ActionCard class="border-danger">
            <template slot="title">
                <span class="text-danger">
                    Delete Chapter
                </span>
            </template>
            <template slot="content">
                <div class="d-flex">
                    <div class="flex-shrink-1">
                        <i class="mdi mdi-18px mdi-information-outline text-danger"></i>
                    </div>
                    <div class="flex-grow-1 pl-2">
                        <p class="h5 font-weight-normal">
                            This action will delete this chapter forever never to be recovered again. <b></b>
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
                <ConfirmButton
                    variant="outline-danger"
                    YesButtonVariant="danger"
                    NoButtonVariant="outline-primary"
                    @click="DeleteChapter"
                >
                    <i class="mdi mdi-delete"></i>
                    Delete Chapter

                    <template slot="title">
                        Delete Chapter
                    </template>

                    <template slot="body">
                        <p>
                            Are you sure you want to delete this chapter?
                        </p>

                        <p class="h5 font-weight-normal">
                            Chapter: {{Chapter.Title}}
                        </p>

                        <p class="mt-3 text-danger">
                            Note: This action cannot be undone.
                        </p>
                    </template>

                    <template slot="yes-button-content">
                        Yes - Delete
                    </template>
                    <template slot="no-button-content">
                        No - Keep
                    </template>
                </ConfirmButton>
            </template>
        </ActionCard>
    </div>
</template>