import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageComicStore} from '../../../../../scripts/stores/ManageComicStore';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

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

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    ChapterGroups: ChapterGroupResponse[] = [];

    async created() {
        await this.FetchChapterGroups();
    }

    async FetchChapterGroups() {
        this.LoaderService.show();

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

        this.LoaderService.hide();
    }

    get Comic() {
        return this.ManageComicStore.Comic;
    }

    get ArcsCount() {
        return this.ChapterGroups.filter(c => !!c.Arc).length;
    }

    async OnChapterOrderChange(dragEvent: DragChangeEvent<Chapter>) {
        if (!dragEvent.moved) {
            return;
        }

        const movedEvent = dragEvent.moved;
        const chapter = movedEvent.element;

        this.LoaderService.show();

        try {
            await this.HttpService.api.chapters.reorder(chapter.Id, movedEvent.newIndex);

            await this.FetchChapterGroups();
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }
}