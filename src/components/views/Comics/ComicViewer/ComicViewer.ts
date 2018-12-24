import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

@Component
export default class extends Vue {

    @Prop()
    ComicId: string;

    Comic: Comic = null;

    @Require()
    HttpService: HttpService;

    async created() {
        if (!this.IsCreateMode) {
            this.Comic = await this.HttpService.api.comics.get(this.ComicId);
        }
    }

    get IsCreateMode() {
        return !this.ComicId;
    }
}