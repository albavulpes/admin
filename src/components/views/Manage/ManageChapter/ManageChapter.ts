import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

@Component
export default class extends Vue {

    @Prop({required: true})
    ArcId: string;

    @Require()
    HttpService: HttpService;

    @Require()
    LoaderService: LoaderService;

    Arc: Arc = null;

    async created() {
        await this.FetchArc();
    }

    async FetchArc() {
        this.LoaderService.show();

        this.Arc = await this.HttpService.api.arcs.get(this.ArcId);

        this.LoaderService.hide();
    }
}