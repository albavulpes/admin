import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import MediaAddButton from '../../MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaAddButton
    }
})
export default class extends Vue {

    ChooseFile() {
        const fileInput = this.$refs['fileInput'] as HTMLInputElement;

        fileInput.click();
    }

    async StartUpload(event: Event) {
        const target = event.target as HTMLInputElement;

        const file = target.files && target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        console.log(formData);
    }
}