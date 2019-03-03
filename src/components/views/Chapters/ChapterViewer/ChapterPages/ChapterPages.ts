import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageChapterStore} from '../../../../../scripts/stores/ManageChapterStore';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

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
    HttpService: HttpService;

    @Require()
    ToastService: ToastService;

    @Require()
    ManageChapterStore: ManageChapterStore;

    Pages: Page[] = [];

    SelectedPageIds: string[] = [];

    async created() {
        await this.FetchPages();
    }

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }

    get DraggableOptions() {
        return {
            filter: '.nodrag',
            animation: 250
        };
    }

    async FetchPages() {
        this.Pages = await this.HttpService.api.pages.getAll(this.Chapter.Id);
    }

    async OnPageClick() {
        console.log('click');
    }

    async OnPageSelect(page: Page) {
        const pageIdIndex = this.SelectedPageIds.indexOf(page.Id);

        if (pageIdIndex >= 0) {
            this.SelectedPageIds.splice(pageIdIndex, 1);
        }
        else {
            this.SelectedPageIds.push(page.Id);
        }
    }

    async OnPageOrderChange(dragEvent: DragChangeEvent<Page>) {
        if (!dragEvent.moved) {
            return;
        }

        const movedEvent = dragEvent.moved;
        const page = movedEvent.element;

        try {
            await this.HttpService.api.pages.reorder(page.Id, movedEvent.newIndex);

            await this.FetchPages();
        }
        catch (error) {
            this.ToastService.error(error);
        }
    }

    async AddPages() {
        console.log('add');
    }

    IsSelected(page: Page) {
        return this.SelectedPageIds.includes(page.Id);
    }
}