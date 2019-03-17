import {Inject, Service} from 'typedi';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

@Service({global: true})
export class PagesService {

    @Inject()
    HttpService: HttpService;

    async getAllPageForChapter(chapterId: string): Promise<Page[]> {
        return await this.HttpService.api.pages.getAll(chapterId);
    }

    async createPagesFromImageFiles(chapterId: string, files: FileList | File[]): Promise<Page[]> {
        const formData = new FormData();

        for (let file of Array.from(files)) {
            formData.append('files', file);
        }

        const imageResponses = await this.HttpService.api.images.postMultiple(formData);

        const resultPages = [] as Page[];

        for (let imageResponse of imageResponses) {
            const page = {
                ChapterId: chapterId,
                CoverImage: {
                    FullSize: imageResponse.ImagePath,
                    Thumbnail: imageResponse.ThumbnailPath
                }
            } as Page;

            const pageResponse = await this.HttpService.api.pages.post(page);

            resultPages.push(pageResponse);
        }

        return resultPages;
    }

    async reorderPage(pageId: string, newIndex: number): Promise<Page> {
        return await this.HttpService.api.pages.reorder(pageId, newIndex);
    }
}