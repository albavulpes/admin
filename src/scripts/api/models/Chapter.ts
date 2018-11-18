import {Model, ModelIdentifier} from './base/Model';
import {PageCompact} from './Page';

export interface Chapter extends Model {
    Number: number;
    Pages: PageCompact[];

    ArcId: ModelIdentifier;
}