import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {ManageComicStore} from '../../../../../scripts/stores/ManageComicStore';

import ImageViewer from '../../../../shared/images/ImageViewer/ImageViewer.vue';

@Component({
    components: {
        ImageViewer
    }
})
export default class extends Vue {

    @Require()
    ManageComicStore: ManageComicStore;

    get Comic() {
        return this.ManageComicStore.Comic;
    }
}