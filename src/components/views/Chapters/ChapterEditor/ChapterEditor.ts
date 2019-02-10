import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {ChapterEditForm} from '../../../../scripts/forms/arcs/ChapterEditForm';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

import ImageUploader from '../../../shared/images/ImageUploader/ImageUploader.vue';
import cloneDeep from 'lodash/cloneDeep';

@Component({
    components: {
        ImageUploader
    }
})
export default class extends Vue {

    @Prop()
    ComicId: string;

    @Prop()
    Chapter: Chapter;

    @Prop()
    IsCreateMode: boolean;

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    @Require()
    ChapterEditForm: ChapterEditForm;

    FormData: Chapter = null;

    created() {
        this.ResetForm();
    }

    ResetForm() {
        if (this.IsCreateMode) {
            this.FormData = this.ChapterEditForm.getDefaultData();
            this.FormData.ComicId = this.ComicId;
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

            this.$emit('update');

            this.$router.push({
                name: 'manage.chapter',
                params: {
                    ChapterId: this.FormData.Id
                }
            });

            this.LoaderService.hide();
        }
        catch (error) {
            this.ToastService.success(error);
        }
    }
}