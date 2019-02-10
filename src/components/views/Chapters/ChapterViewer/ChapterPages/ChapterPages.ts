import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import MediaCollection from '../../../../shared/media/MediaCollection/MediaCollection.vue';

@Component({
    components: {
        MediaCollection
    }
})
export default class extends Vue {

    @Prop()
    Chapter: Chapter;

    Pages: Page[] = [];

    @Require()
    HttpService: HttpService;

    async created() {
        this.Pages = await this.HttpService.api.pages.getAll(this.Chapter.Id);
    }

    async AddPages() {
        console.log('add');
    }
}