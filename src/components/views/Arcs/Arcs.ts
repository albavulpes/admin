import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import MediaCard from '../../shared/MediaCard/MediaCard.vue';
import MediaAddButton from '../../shared/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    }
})
export default class extends Vue {

    @Prop()
    ComicId: string;

    Arcs: Arc[] = [];

    @Require()
    HttpService: HttpService;

    async created() {
        this.Arcs = await this.HttpService.api.arcs.getAll(this.ComicId);
    }
}