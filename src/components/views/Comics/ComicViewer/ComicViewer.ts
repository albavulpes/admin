import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ComicEditForm} from '../../../../scripts/forms/comics/ComicEditForm';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

import MediaCard from '../../../shared/MediaCard/MediaCard.vue';
import MediaAddButton from '../../../shared/MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    }
})
export default class extends Vue {

    @Prop()
    ComicId: string;

    Comic: Comic = null;
    Arcs: Arc[] = null;

    @Require()
    HttpService: HttpService;

    @Require()
    ToastService: ToastService;

    @Require()
    ComicEditForm: ComicEditForm;

    async created() {
        if (this.IsCreateMode) {
            this.Comic = this.ComicEditForm.getDefaultData();
        }
        else {
            this.Comic = await this.HttpService.api.comics.get(this.ComicId);
            this.Arcs = await this.HttpService.api.arcs.getAll(this.ComicId);
        }
    }

    get IsCreateMode() {
        return !this.ComicId;
    }

    async SubmitForm() {
        this.Comic = await this.ComicEditForm.submit(this.Comic);

        this.ToastService.success(`Success! <b>${this.Comic.Title}</b> has been saved.`);

        this.$router.push({
            name: 'comics.id',
            params: {
                ComicId: this.Comic.Id
            }
        })
    }
}