import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import MediaCollection from '../../../../shared/media/MediaCollection/MediaCollection.vue';

@Component({
    components: {
        MediaCollection
    }
})
export default class extends Vue {

    @Prop()
    Comic: Comic;

    ChapterGroups: ChapterGroupResponse[] = [];

    @Require()
    HttpService: HttpService;

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