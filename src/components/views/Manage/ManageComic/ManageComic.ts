import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

@Component
export default class extends Vue {

    @Prop({required: true})
    ComicId: string;

    @Require()
    HttpService: HttpService;

    @Require()
    LoaderService: LoaderService;

    Comic: ComicResponse = null;

    async created() {
        await this.FetchComic();
    }

    async FetchComic() {
        this.LoaderService.show();

        this.Comic = await this.HttpService.api.comics.get(this.ComicId);

        this.LoaderService.hide();
    }
}