<script lang="ts" src="./ConfirmButton.ts"></script>

<template>
    <div class="ConfirmModalComponent">
        <b-button v-bind="$props" @click="ShowModal">
            <slot></slot>
        </b-button>

        <!-- Modal Component -->
        <b-modal v-model="IsModalShown" centered>
            <template slot="modal-title">
                <h5 class="font-weight-normal m-0">
                    <slot name="title">
                        Confirm
                    </slot>
                </h5>
            </template>

            <div class="my-2">
                <slot name="body">
                    <p>
                        Are you sure?
                    </p>
                </slot>
            </div>

            <template slot="modal-footer">
                <div class="d-flex justify-content-end w-100">
                    <div>
                        <b-button ref="yesButton" class="px-5 mr-1" :variant="$props.YesButtonVariant || 'primary'" @click="Confirm">
                            <slot name="yes-button-content">
                                Yes
                            </slot>
                        </b-button>
                        <b-button ref="noButton" class="px-5" :variant="$props.NoButtonVariant || 'light'" @click="HideModal">
                            <slot name="no-button-content">
                                No
                            </slot>
                        </b-button>
                    </div>
                </div>
            </template>
        </b-modal>
    </div>
</template>