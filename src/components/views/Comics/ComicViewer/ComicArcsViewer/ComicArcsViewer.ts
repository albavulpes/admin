import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

import MediaCard from '../../../../shared/MediaCard/MediaCard.vue';
import MediaAddButton from '../../../../shared/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    }
})
export default class extends Vue {
    @Prop()
    ComicId: string;

    Comic: Comic = null;
    Arcs: Arc[] = null;

    @Require()
    HttpService: HttpService;

    @Require()
    ToastService: ToastService;

    async created() {
        this.Comic = await this.HttpService.api.comics.get(this.ComicId);
        this.Arcs = await this.HttpService.api.arcs.getAll(this.ComicId);
    }
}