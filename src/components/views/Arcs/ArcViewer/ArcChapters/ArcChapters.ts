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
    Comic: Comic;

    Arcs: Arc[] = [];

    @Require()
    HttpService: HttpService;

    async created() {
        this.Arcs = await this.HttpService.api.arcs.getAll(this.Comic.Id);
    }
}