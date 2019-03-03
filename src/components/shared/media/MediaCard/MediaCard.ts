import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Route} from 'vue-router';

@Component
export default class extends Vue {

    @Prop()
    Image: string;

    @Prop()
    Selectable: boolean;

    @Prop()
    to: Route;

    CardClick() {
        this.$emit('click');
    }

    Select() {
        this.$emit('selected');
    }
}