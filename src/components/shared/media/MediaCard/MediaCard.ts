import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Route} from 'vue-router';

@Component
export default class extends Vue {

    @Prop()
    Image: string;

    @Prop()
    to: Route;

    CardClick() {
        if (this.$listeners.click) {
            this.$emit('click');
        }
    }
}