import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Route} from 'vue-router';

@Component
export default class extends Vue {

    @Prop()
    to: Route;

    ButtonClick() {
        this.$emit('click');
    }
}