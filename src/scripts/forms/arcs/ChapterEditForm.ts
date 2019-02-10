import {Inject, Service} from 'typedi';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

@Service()
export class ChapterEditForm {

    @Inject()
    HttpService: HttpService;

    @Inject()
    IdentityStore: IdentityStore;

    getDefaultData(): Chapter {
        const userName = this.IdentityStore.UserName;

        return {
            Title: null,
            Description: null,
            Author: userName,
            ArcId: null,
            ComicId: null,
            ChapterNumber: null,
            PublishDate: null,
            CoverImage: {
                FullSize: null,
                Thumbnail: null
            }
        } as Chapter;
    }

    async submit(data: Chapter): Promise<Chapter> {
        if (data.Id) {
            return await this.HttpService.api.chapters.put(data.Id, data);
        }

        return await this.HttpService.api.chapters.post(data);
    }
}