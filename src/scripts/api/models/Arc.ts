import {Model, ModelIdentifier} from './base/Model';

export interface Arc extends Model {
    Title: string;
    Number: number;

    ComicId: ModelIdentifier;
}