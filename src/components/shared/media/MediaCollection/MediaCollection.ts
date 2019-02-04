import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Route} from 'vue-router';

import MediaCard from '../../MediaCard/MediaCard.vue';
import MediaAddButton from '../../MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaCard,
        MediaAddButton
    }
})
export default class extends Vue {

    @Prop()
    MediaItems: MediaContentCollection[];

    @Prop()
    MediaDetailsRoute: (item: MediaContentCollection) => Route;

    @Prop()
    AddMediaRoute: Route;
}