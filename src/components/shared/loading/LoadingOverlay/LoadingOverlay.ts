import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {BreedingRhombusSpinner, HalfCircleSpinner} from 'epic-spinners';

@Component({
    components: {
        HalfCircleSpinner,
        BreedingRhombusSpinner
    }
})
export default class extends Vue {
}