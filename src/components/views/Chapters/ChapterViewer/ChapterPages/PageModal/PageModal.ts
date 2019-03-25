import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop()
    value: Page;

    OnHidden() {
        this.$emit('input', null);
    }
}