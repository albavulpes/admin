import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import MediaCard from '../../shared/MediaCard/MediaCard.vue';
import MediaAddButton from '../../shared/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    },
    metaInfo: {
        title: 'Comics'
    }
})
export default class extends Vue {

    Comics: Comic[] = [];

    @Require()
    HttpService: HttpService;

    async created() {
        this.Comics = await this.HttpService.api.comics.getAll();
    }
}