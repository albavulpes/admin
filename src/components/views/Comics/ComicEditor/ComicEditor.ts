import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {ComicEditForm} from '../../../../scripts/forms/comics/ComicEditForm';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

import ImageUploader from '../../../shared/images/ImageUploader/ImageUploader.vue';

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
    Comic: Comic;

    @Prop()
    IsCreateMode: boolean;

    created() {
        if (this.IsCreateMode) {
            this.ResetForm();
        }
    }

    ResetForm() {
        this.Comic = this.ComicEditForm.getDefaultData();
    }

    async SubmitForm() {
        this.LoaderService.show();

        this.Comic = await this.ComicEditForm.submit(this.Comic);

        this.ToastService.success(`Success! <b>${this.Comic.Title}</b> has been saved.`);

        this.$router.push({
            name: 'manage.comic.id',
            params: {
                ComicId: this.Comic.Id
            }
        });

        this.LoaderService.hide();
    }
}