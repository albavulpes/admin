import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

@Component
export default class extends Vue {

    @Prop({required: true})
    ChapterId: string;

    @Require()
    HttpService: HttpService;

    @Require()
    LoaderService: LoaderService;

    Chapter: Chapter = null;

    async created() {
        await this.FetchChapter();
    }

    async FetchChapter() {
        this.LoaderService.show();

        this.Chapter = await this.HttpService.api.chapters.get(this.ChapterId);

        this.LoaderService.hide();
    }
}