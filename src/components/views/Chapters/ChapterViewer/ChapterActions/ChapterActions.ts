import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import ActionCard from '../../../../shared/management/ActionCard/ActionCard.vue';

@Component({
    components: {
        ActionCard
    }
})
export default class extends Vue {

    @Prop()
    Comic: Comic;
}