import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageComicStore} from '../../../../../scripts/stores/ManageComicStore';

import MediaCard from '../../../../shared/media/MediaCard/MediaCard.vue';
import MediaAddButton from '../../../../shared/media/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    }
})
export default class extends Vue {

    @Require()
    ManageComicStore: ManageComicStore;

    @Require()
    HttpService: HttpService;

    ChapterGroups: ChapterGroupResponse[] = [];

    async created() {
        this.ChapterGroups = await this.HttpService.api.chapters.getAll(this.Comic.Id);

        // If none, just show an empty unassigned arc group
        if (!this.ChapterGroups || this.ChapterGroups.length === 0) {
            this.ChapterGroups = [
                {
                    Arc: null,
                    Chapters: []
                }
            ];
        }
    }

    get Comic() {
        return this.ManageComicStore.Comic;
    }
}