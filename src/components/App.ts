import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import TopNav from './layout/TopNav/TopNav.vue';
import FooterNav from './layout/FooterNav/FooterNav.vue';

@Component({
    components: {
        TopNav,
        FooterNav
    },
    metaInfo: {
        titleTemplate: chunk => (chunk ? chunk + ' - ' : '') + 'Alba Vulpes Admin'
    }
})
export default class extends Vue {
}