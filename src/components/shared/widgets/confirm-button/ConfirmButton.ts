import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop()
    variant: string;

    @Prop()
    YesButtonVariant: string;

    @Prop()
    NoButtonVariant: string;

    IsModalShown: boolean = false;

    ShowModal() {
        this.IsModalShown = true;
    }

    HideModal() {
        this.IsModalShown = false;
    }

    async Confirm() {
        const originalAction = this.$listeners.click as Function;

        if (originalAction) {
            await originalAction();
        }

        this.HideModal();
    }
}