import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';

import MediaCard from '../../shared/media/MediaCard/MediaCard.vue';
import MediaAddButton from '../../shared/media/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    },
    metaInfo: {
        title: 'Comics'
    }
})
export default class extends Vue {

    Comics: ComicResponse[] = [];

    @Require()
    HttpService: HttpService;

    @Require()
    LoaderService: LoaderService;

    async created() {
        this.LoaderService.show();

        this.Comics = await this.HttpService.api.comics.getAll();

        this.LoaderService.hide();
    }

    ComicSelected(item: ComicResponse) {
        this.$router.push({
            name: 'manage.comic.details',
            params: {
                ComicId: item.Id
            }
        });
    }

    AddComic() {
        this.$router.push({
            name: 'manage.comic.new'
        });
    }
}