import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ComicEditForm} from '../../../../scripts/forms/comics/ComicEditForm';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

import ImageViewer from '../../../shared/images/ImageViewer/ImageViewer.vue';

@Component({
    components: {
        ImageViewer
    },
    metaInfo() {
        return {
            title: this.Comic && this.Comic.Title
        };
    }
})
export default class extends Vue {

    @Prop()
    Comic: Comic;
}