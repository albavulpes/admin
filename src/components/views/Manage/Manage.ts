import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

@Component
export default class extends Vue {

    Comic: Comic = null;
    Arc: Arc = null;
    Chapter: Chapter = null;
    Page: Page = null;

    @Require()
    HttpService: HttpService;

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

        this.Comic = await this.HttpService.api.comics.get(ComicId);
    }

    @Watch('ArcId', {immediate: true})
    async WatchArcId(ArcId: string) {
        if (!ArcId)
            return;

        this.Arc = await this.HttpService.api.arcs.get(ArcId);
    }

    @Watch('ChapterId', {immediate: true})
    async WatchChapterId(ChapterId: string) {
        if (!ChapterId)
            return;

        this.Chapter = await this.HttpService.api.chapters.get(ChapterId);
    }
}