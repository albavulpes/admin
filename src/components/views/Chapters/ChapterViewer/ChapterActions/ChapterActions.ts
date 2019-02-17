import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ManageChapterStore} from '../../../../../scripts/stores/ManageChapterStore';

import ActionCard from '../../../../shared/management/ActionCard/ActionCard.vue';

@Component({
    components: {
        ActionCard
    }
})
export default class extends Vue {

    @Require()
    ManageChapterStore: ManageChapterStore;

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }
}