import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import MediaAddButton from '../../../../../shared/media/MediaAddButton/MediaAddButton.vue';

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

    async OnInput(event: Event) {
        this.$emit('input', event);
    }
}