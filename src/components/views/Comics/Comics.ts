import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

@Component
export default class extends Vue {

    Comics: Comic[] = [];

    @Require()
    HttpService: HttpService;

    async created() {
        this.Comics = await this.HttpService.api.comics.getAll();
    }
}