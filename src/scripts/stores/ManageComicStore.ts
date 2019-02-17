import {Inject, Service} from 'typedi';
import {Action, Mutation, State, VuexStore} from '@albavulpes/ui-core/dist/framework/decorators/Store';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

@Service()
export class ManageComicStore extends VuexStore {

    @Inject()
    private HttpService: HttpService;

    @Inject()
    private LoaderService: LoaderService;

    @Inject()
    private ToastService: ToastService;

    @State()
    Comic: ComicResponse;

    @Action()
    async fetchComic(id: string) {
        this.LoaderService.show();

        try {
            const comicResponse = await this.HttpService.api.comics.get(id);

            this.updateComic(comicResponse);
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }

    @Action()
    async refetchComic() {
        if (!this.Comic || !this.Comic.Id) {
            return;
        }

        await this.fetchComic(this.Comic.Id);
    }

    @Mutation()
    private updateComic(comicResponse: ComicResponse) {
        this.Comic = comicResponse;
    }
}
