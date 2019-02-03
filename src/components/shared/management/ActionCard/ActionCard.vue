<template>
    <b-card class="ActionCardComponent mb-3">
        <div class="row align-items-center">
            <div class="col">
                <div class="card-title">
                    <h2 class="mb-3">
                        <slot name="title"></slot>
                    </h2>
                </div>

                <slot name="content"></slot>
            </div>
            <div class="col-auto">
                <slot name="actions"></slot>
            </div>
        </div>
    </b-card>
</template>