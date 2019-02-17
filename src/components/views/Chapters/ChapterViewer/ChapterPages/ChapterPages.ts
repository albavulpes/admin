import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageChapterStore} from '../../../../../scripts/stores/ManageChapterStore';

import MediaCard from '../../../../shared/media/MediaCard/MediaCard.vue';
import MediaAddButton from '../../../../shared/media/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    }
})
export default class extends Vue {

    @Require()
    HttpService: HttpService;

    @Require()
    ManageChapterStore: ManageChapterStore;

    Pages: Page[] = [];

    async created() {
        this.Pages = await this.HttpService.api.pages.getAll(this.Chapter.Id);
    }

    get Chapter() {
        return this.ManageChapterStore.Chapter;
    }

    async AddPages() {
        console.log('add');
    }
}