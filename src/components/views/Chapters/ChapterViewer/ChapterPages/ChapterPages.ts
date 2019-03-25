import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageChapterStore} from '../../../../../scripts/stores/ManageChapterStore';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';
import {PagesService} from '../../../../../scripts/services/PagesService';

import Draggable, {DragChangeEvent} from 'vuedraggable';

import MediaCard from '../../../../shared/media/MediaCard/MediaCard.vue';
import AddPageButton from './AddPageButton/AddPageButton.vue';
import PageModal from './PageModal/PageModal.vue';

@Component({
    components: {
        Draggable,
        MediaCard,
        AddPageButton,
        PageModal
    }
})
export default class extends Vue {

    @Require()
    HttpService: HttpService;

    @Require()
    PagesService: PagesService;

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    @Require()
    ManageChapterStore: ManageChapterStore;

    Pages: Page[] = [];

    SelectedPageIds: string[] = [];

    PageShown: Page = null;

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
        this.Pages = await this.PagesService.getAllPageForChapter(this.Chapter.Id);
    }

    async OnPageClick(page: Page) {
        this.PageShown = page;
    }

    OnPageSelect(page: Page) {
        const pageIdIndex = this.SelectedPageIds.indexOf(page.Id);

        if (pageIdIndex >= 0) {
            this.SelectedPageIds.splice(pageIdIndex, 1);
        }
        else {
            this.SelectedPageIds.push(page.Id);
        }
    }

    SelectAll() {
        this.SelectedPageIds = this.Pages.map(p => p.Id);
    }

    DeselectAll() {
        this.SelectedPageIds = [];
    }

    IsSelected(page: Page) {
        return this.SelectedPageIds.includes(page.Id);
    }

    async OnPageOrderChange(dragEvent: DragChangeEvent<Page>) {
        if (!dragEvent.moved) {
            return;
        }

        const movedEvent = dragEvent.moved;
        const page = movedEvent.element;

        this.LoaderService.show();

        try {
            await this.PagesService.reorderPage(page.Id, movedEvent.newIndex);

            await this.FetchPages();
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }

    async AddPages(event: Event) {
        const target = event.target as HTMLInputElement;

        const files = target.files;

        this.LoaderService.show();

        try {
            await this.PagesService.createPagesFromImageFiles(this.Chapter.Id, files);

            await this.FetchPages();
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }

    async PublishSelectedPages() {
        if (!Array.isArray(this.SelectedPageIds)) {
            return;
        }

        this.LoaderService.show();

        const pagePublishPromises = this.SelectedPageIds
            .map(async (pageId) => {
                try {
                    await this.HttpService.api.pages.publish(pageId, true);
                }
                catch (err) {
                }
            });

        await Promise.all(pagePublishPromises);

        await this.FetchPages();

        this.DeselectAll();

        await this.ToastService.success(`Success! ${pagePublishPromises.length} pages were published.`);

        this.LoaderService.hide();
    }
}