import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ManageChapterStore} from '../../../../scripts/stores/ManageChapterStore';

@Component
export default class extends Vue {

    @Prop({required: true})
    ChapterId: string;

    @Require()
    ManageChapterStore: ManageChapterStore;

    async created() {
        this.ManageChapterStore.reset();

        await this.ManageChapterStore.fetchChapter(this.ChapterId);
    }

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }
}