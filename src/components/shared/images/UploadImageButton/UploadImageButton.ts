import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import MediaAddButton from '../../MediaAddButton/MediaAddButton.vue';

@Component({
    components: {
        MediaAddButton
    }
})
export default class extends Vue {

    created() {
        console.log(process.env.NODE_ENV)
    }
}