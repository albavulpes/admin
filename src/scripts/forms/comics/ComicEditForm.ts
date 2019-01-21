import {Inject, Service} from 'typedi';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

@Service()
export class ComicEditForm {

    @Inject()
    HttpService: HttpService;

    @Inject()
    IdentityStore: IdentityStore;

    getDefaultData(): Comic {
        const userName = this.IdentityStore.UserName;

        return {
            Title: null,
            Author: userName,
            CoverImage: { // TODO: This is test data of course
                FullSize: `https://placeimg.com/2400/3200/nature`,
                Thumbnail: `https://placeimg.com/240/320/nature`
            },
            Description: null,
            ReleaseDate: null
        } as Comic;
    }

    async submit(data: Comic): Promise<Comic> {
        if (data.Id) {
            return await this.HttpService.api.comics.put(data.Id, data);
        }

        return await this.HttpService.api.comics.post(data);
    }
}