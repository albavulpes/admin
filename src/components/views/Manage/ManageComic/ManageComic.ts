import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ManageComicStore} from '../../../../scripts/stores/ManageComicStore';

@Component
export default class extends Vue {

    @Prop({required: true})
    ComicId: string;

    @Require()
    ManageComicStore: ManageComicStore;

    async created() {
        this.ManageComicStore.reset();

        await this.ManageComicStore.fetchComic(this.ComicId);
    }

    get Comic() {
        return this.ManageComicStore.Comic;
    }
}