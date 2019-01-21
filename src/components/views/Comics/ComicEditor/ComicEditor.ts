import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ComicEditForm} from '../../../../scripts/forms/comics/ComicEditForm';

import MediaAddButton from '../../../shared/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaAddButton
    }
})
export default class extends Vue {

    @Require()
    ComicEditForm: ComicEditForm;

    Comic: Comic = null;

    created() {
        this.Comic = this.ComicEditForm.getDefaultData();
    }
}