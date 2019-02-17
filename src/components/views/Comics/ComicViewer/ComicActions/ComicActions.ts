import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

import moment from 'moment';

import ActionCard from '../../../../shared/management/ActionCard/ActionCard.vue';

@Component({
    components: {
        ActionCard
    }
})
export default class extends Vue {

    @Prop()
    Comic: Comic;

    @Require()
    HttpService: HttpService;

    @Require()
    ToastService: ToastService;

    get HasPublishDate() {
        return !!this.Comic.PublishDate;
    }

    get IsPublished() {
        return this.HasPublishDate && moment(this.Comic.PublishDate).isBefore(moment());
    }

    async PublishComic() {
        try {
            await this.HttpService.api.comics.publish(this.Comic.Id, true);

            this.$emit('update');
        }
        catch (error) {
            this.ToastService.error(error.message);
        }
    }

    async UnpublishComic() {
        try {
            await this.HttpService.api.comics.publish(this.Comic.Id, false);

            this.$emit('update');
        }
        catch (error) {
            this.ToastService.error(error.message);
        }
    }
}