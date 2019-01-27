import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class extends Vue {

    ButtonClick() {
        if (typeof this.$listeners.click === 'function') {
            this.$listeners.click();
        }
    }
}