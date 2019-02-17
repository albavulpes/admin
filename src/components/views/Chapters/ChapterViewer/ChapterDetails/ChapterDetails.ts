import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ManageChapterStore} from '../../../../../scripts/stores/ManageChapterStore';

import ImageViewer from '../../../../shared/images/ImageViewer/ImageViewer.vue';

@Component({
    components: {
        ImageViewer
    }
})
export default class extends Vue {

    @Require()
    ManageChapterStore: ManageChapterStore;

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }
}