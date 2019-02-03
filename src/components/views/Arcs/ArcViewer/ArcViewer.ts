import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import ImageViewer from '../../../shared/images/ImageViewer/ImageViewer.vue';

@Component({
    components: {
        ImageViewer
    },
    metaInfo() {
        return {
            title: this.Arc && this.Arc.Title
        };
    }
})
export default class extends Vue {

    @Prop()
    Arc: Arc;
}