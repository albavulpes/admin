import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import MainNav from './layout/MainNav/MainNav.vue';
import TopNav from './layout/TopNav/TopNav.vue';
import FooterNav from './layout/FooterNav/FooterNav.vue';

@Component({
    components: {
        MainNav,
        TopNav,
        FooterNav
    },
    metaInfo: {
        titleTemplate: chunk => (chunk ? chunk + ' - ' : '') + 'Alba Vulpes Admin'
    }
})
export default class extends Vue {
}