import {Inject, Service} from 'typedi';
import {Action, Mutation, State, VuexStore} from '@albavulpes/ui-core/dist/framework/decorators/Store';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {LoaderService} from '@albavulpes/ui-core/dist/services/ui/LoaderService';
import {ToastService} from '@albavulpes/ui-core/dist/services/ui/ToastService';

@Service({global: true})
export class ManageChapterStore extends VuexStore {

    @Inject()
    private HttpService: HttpService;

    @Inject()
    private LoaderService: LoaderService;

    @Inject()
    private ToastService: ToastService;

    @State()
    Chapter: ChapterResponse;

    @Action()
    async fetchChapter(id: string) {
        this.LoaderService.show();

        try {
            const chapterResponse = await this.HttpService.api.chapters.get(id);

            this.updateChapter(chapterResponse);
        }
        catch (error) {
            this.ToastService.error(error.message);
        }

        this.LoaderService.hide();
    }

    @Action()
    async refetchChapter() {
        if (!this.Chapter || !this.Chapter.Id) {
            return;
        }

        await this.fetchChapter(this.Chapter.Id);
    }

    @Mutation()
    reset() {
        this.Chapter = null;
    }

    @Mutation()
    private updateChapter(comicResponse: ChapterResponse) {
        this.Chapter = comicResponse;
    }
}
