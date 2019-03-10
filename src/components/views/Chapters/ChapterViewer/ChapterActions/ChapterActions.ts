import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ManageChapterStore} from '../../../../../scripts/stores/ManageChapterStore';

import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

import ActionCard from '../../../../shared/management/ActionCard/ActionCard.vue';
import ConfirmButton from '../../../../shared/widgets/confirm-button/ConfirmButton.vue';

@Component({
    components: {
        ActionCard,
        ConfirmButton
    }
})
export default class extends Vue {

    @Require()
    ManageChapterStore: ManageChapterStore;

    @Require()
    HttpService: HttpService;

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }

    get HasPublishDate() {
        return !!this.Chapter.PublishDate;
    }

    get IsPublished() {
        return this.Chapter.IsPublished;
    }

    async PublishChapter() {
        this.LoaderService.show();

        try {
            await this.HttpService.api.chapters.publish(this.Chapter.Id, true);

            await this.ManageChapterStore.refetchChapter();
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }

    async UnpublishChapter() {
        this.LoaderService.show();

        try {
            await this.HttpService.api.chapters.publish(this.Chapter.Id, false);

            await this.ManageChapterStore.refetchChapter();
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }

    async DeleteChapter() {
        this.LoaderService.show();

        try {
            await this.HttpService.api.chapters.delete(this.Chapter.Id);

            const comicId = this.Chapter.ComicId;

            await this.ManageChapterStore.reset();

            this.$router.push({name: 'manage.comic.chapters', params: {ComicId: comicId}});
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }
}