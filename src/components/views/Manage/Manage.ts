import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

@Component
export default class extends Vue {

    Comic: Comic = null;
    Arc: Arc = null;
    Chapter: Chapter = null;

    @Require()
    HttpService: HttpService;

    @Require()
    LoaderService: LoaderService;

    get ComicId() {
        return this.$route.params.ComicId;
    }

    get ArcId() {
        return this.$route.params.ArcId;
    }

    get ChapterId() {
        return this.$route.params.ChapterId;
    }

    @Watch('ComicId', {immediate: true})
    async WatchComicId(ComicId: string) {
        if (!ComicId)
            return;

        this.LoaderService.show();

        this.Comic = await this.HttpService.api.comics.get(ComicId);

        this.LoaderService.hide();
    }

    @Watch('ArcId', {immediate: true})
    async WatchArcId(ArcId: string) {
        if (!ArcId)
            return;

        this.LoaderService.show();

        this.Arc = await this.HttpService.api.arcs.get(ArcId);

        this.LoaderService.hide();
    }

    @Watch('ChapterId', {immediate: true})
    async WatchChapterId(ChapterId: string) {
        if (!ChapterId)
            return;

        this.LoaderService.show();

        this.Chapter = await this.HttpService.api.chapters.get(ChapterId);

        this.LoaderService.hide();
    }
}