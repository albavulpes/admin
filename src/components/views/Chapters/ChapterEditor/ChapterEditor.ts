import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {ChapterEditForm} from '../../../../scripts/forms/arcs/ChapterEditForm';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';
import {ManageChapterStore} from '../../../../scripts/stores/ManageChapterStore';

import cloneDeep from 'lodash/cloneDeep';

import ImageUploader from '../../../shared/images/ImageUploader/ImageUploader.vue';

@Component({
    components: {
        ImageUploader
    }
})
export default class extends Vue {

    @Prop()
    ComicId: string;

    @Prop()
    ArcId: string;

    @Prop()
    IsCreateMode: boolean;

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    @Require()
    ChapterEditForm: ChapterEditForm;

    @Require()
    ManageChapterStore: ManageChapterStore;

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }

    FormData: Chapter = null;

    created() {
        this.ResetForm();
    }

    ResetForm() {
        if (this.IsCreateMode) {
            this.FormData = this.ChapterEditForm.getDefaultData();
            this.FormData.ComicId = this.ComicId;
            this.FormData.ArcId = this.ArcId;
        }
        else {
            this.FormData = cloneDeep(this.Chapter);
        }
    }

    async SubmitForm() {
        this.LoaderService.show();

        try {
            this.FormData = await this.ChapterEditForm.submit(this.FormData);

            this.ToastService.success(`Success! <b>${this.FormData.Title}</b> has been saved.`);

            await this.ManageChapterStore.refetchChapter();

            this.$router.push({
                name: 'manage.chapter',
                params: {
                    ChapterId: this.FormData.Id
                }
            });
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }
}