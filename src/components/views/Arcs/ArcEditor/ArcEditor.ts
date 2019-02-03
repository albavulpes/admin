import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';
import {ArcEditForm} from '../../../../scripts/forms/arcs/ArcEditForm';
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
    ArcEditForm: ArcEditForm;

    @Prop()
    Comic: Comic;

    @Prop()
    Arc: Arc;

    @Prop()
    IsCreateMode: boolean;

    created() {
        if (this.IsCreateMode) {
            this.ResetForm();
        }
    }

    ResetForm() {
        this.Arc = this.ArcEditForm.getDefaultData();
    }

    async SubmitForm() {
        this.LoaderService.show();

        this.Comic = await this.ArcEditForm.submit(this.Arc);

        this.ToastService.success(`Success! <b>${this.Arc.Title}</b> has been saved.`);

        this.$router.push({
            name: 'manage.arc',
            params: {
                ArcId: this.Arc.Id
            }
        });

        this.LoaderService.hide();
    }
}