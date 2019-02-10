import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop()
    Image: string;

    CardClick() {
        this.$emit('click');
    }
}