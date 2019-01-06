import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop()
    Comic: Comic;

    @Prop()
    Arc: Arc;

    @Prop()
    Chapter: Chapter;

    @Prop()
    Page: Page;
}