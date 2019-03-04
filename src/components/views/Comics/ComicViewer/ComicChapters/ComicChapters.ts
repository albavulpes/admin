import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageComicStore} from '../../../../../scripts/stores/ManageComicStore';

import Draggable, {DragChangeEvent} from 'vuedraggable';
import MediaCard from '../../../../shared/media/MediaCard/MediaCard.vue';
import MediaAddButton from '../../../../shared/media/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        Draggable,
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
        const chapterGroups = await this.HttpService.api.chapters.getAll(this.Comic.Id);

        this.ChapterGroups = chapterGroups
            .sort((a, b) => {
                if (!a.Arc || !a.Arc.Title) {
                    return 1;
                }
                if (!b.Arc || !b.Arc.Title) {
                    return -1;
                }

                return a.Arc.Title > b.Arc.Title ? 1 : -1;
            });

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

    get DraggableOptions() {
        return {
            filter: '.nodrag',
            animation: 250
        };
    }
}