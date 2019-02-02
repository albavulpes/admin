import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop({required: true})
    src: string;

    @Prop()
    alt: string;
}