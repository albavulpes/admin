import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import MediaAddButton from '../../MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaAddButton
    }
})
export default class extends Vue {

    @Prop()
    value: string;

    @Require()
    HttpService: HttpService;

    ChooseFile() {
        const fileInput = this.$refs['fileInput'] as HTMLInputElement;

        fileInput.click();
    }

    async StartUpload(event: Event) {
        const target = event.target as HTMLInputElement;

        const file = target.files && target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        const imageResponse = await this.HttpService.api.images.post(formData);

        this.$emit('input', imageResponse.ImagePath);
    }
}