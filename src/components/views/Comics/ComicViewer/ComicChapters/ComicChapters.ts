import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ManageComicStore} from '../../../../../scripts/stores/ManageComicStore';

import MediaCollection from '../../../../shared/media/MediaCollection/MediaCollection.vue';

@Component({
    components: {
        MediaCollection
    }
})
export default class extends Vue {

    @Require()
    ManageComicStore: ManageComicStore;

    @Require()
    HttpService: HttpService;

    ChapterGroups: ChapterGroupResponse[] = [];

    async created() {
        this.ChapterGroups = await this.HttpService.api.chapters.getAll(this.Comic.Id);

        // If none, just show an empty unassigned arc group
        if (!this.ChapterGroups || this.ChapterGroups.length === 0) {
            this.ChapterGroups = [
                {
                    Arc: null,
                    Chapters: []
                }
            ];
        }
    }

    get Comic() {
        return this.ManageComicStore.Comic;
    }

    ChapterSelected(item: Chapter) {
        this.$router.push({
            name: 'manage.chapter',
            params: {
                ChapterId: item.Id
            }
        });
    }

    AddChapter() {
        this.$router.push({
            name: 'manage.chapter.new',
            query: {
                comicId: this.Comic.Id
            }
        });
    }
}