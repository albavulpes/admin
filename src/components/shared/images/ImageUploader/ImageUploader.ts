import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import UploadImageButton from '../UploadImageButton/UploadImageButton.vue';

@Component({
    components: {
        UploadImageButton
    }
})
export default class extends Vue {

    @Prop()
    value: string;

    OnImageUploaded(imagePath: string) {
        this.$emit('input', imagePath);
    }
}