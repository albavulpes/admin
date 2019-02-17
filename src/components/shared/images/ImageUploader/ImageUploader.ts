import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

import MediaAddButton from '../../media/MediaAddButton/MediaAddButton.vue';
import LoadingOverlay from '../../loading/LoadingOverlay/LoadingOverlay.vue';
import ImageViewer from '../ImageViewer/ImageViewer.vue';

@Component({
    components: {
        MediaAddButton,
        ImageViewer,
        LoadingOverlay
    }
})
export default class extends Vue {

    @Prop()
    value: string;

    @Require()
    HttpService: HttpService;

    @Require()
    ToastService: ToastService;

    IsLoading: boolean = false;

    ChooseFile() {
        const fileInput = this.$refs['fileInput'] as HTMLInputElement;

        fileInput.click();
    }

    async StartUpload(event: Event) {
        this.IsLoading = true;

        const target = event.target as HTMLInputElement;

        const file = target.files && target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        try {
            const imageResponse = await this.HttpService.api.images.post(formData);

            this.$emit('input', imageResponse.ImagePath);
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.IsLoading = false;
    }
}