import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import MediaCard from '../MediaCard/MediaCard.vue';

@Component({
    components: {
        MediaCard
    }
})
export default class extends Vue {

}