import {Inject, Service} from 'typedi';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

@Service()
export class ArcEditForm {

    @Inject()
    HttpService: HttpService;

    @Inject()
    IdentityStore: IdentityStore;

    getDefaultData(): Arc {
        const userName = this.IdentityStore.UserName;

        return {
            ComicId: null,
            Title: null,
            Author: userName,
            ArcNumber: null,
            CoverImage: {
                FullSize: null,
                Thumbnail: null
            },
            Description: null,
            PublishDate: null
        } as Arc;
    }

    async submit(data: Arc): Promise<Arc> {
        if (data.Id) {
            return await this.HttpService.api.arcs.put(data.Id, data);
        }

        return await this.HttpService.api.arcs.post(data);
    }
}