import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {ComicEditForm} from '../../../../scripts/forms/comics/ComicEditForm';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

import cloneDeep from 'lodash/cloneDeep';

import ImageUploader from '../../../shared/images/ImageUploader/ImageUploader.vue';
import {ManageComicStore} from '../../../../scripts/stores/ManageComicStore';

@Component({
    components: {
        ImageUploader
    }
})
export default class extends Vue {

    @Require()
    ToastService: ToastService;

    @Require()
    LoaderService: LoaderService;

    @Require()
    ComicEditForm: ComicEditForm;

    @Prop()
    IsCreateMode: boolean;

    @Require()
    ManageComicStore: ManageComicStore;

    FormData: Comic = null;

    created() {
        this.ResetForm();
    }

    get Comic() {
        return this.ManageComicStore.Comic;
    }

    ResetForm() {
        if (this.IsCreateMode) {
            this.FormData = this.ComicEditForm.getDefaultData();
        }
        else {
            this.FormData = cloneDeep(this.Comic);
        }
    }

    async SubmitForm() {
        this.LoaderService.show();

        try {
            this.FormData = await this.ComicEditForm.submit(this.FormData);

            this.ToastService.success(`Success! <b>${this.FormData.Title}</b> has been saved.`);

            await this.ManageComicStore.refetchComic();

            this.$router.push({
                name: 'manage.comic.details',
                params: {
                    ComicId: this.FormData.Id
                }
            });
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }
}