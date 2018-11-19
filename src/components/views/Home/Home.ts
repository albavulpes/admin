import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class extends Vue {

    User: StatusResponse = null;

    async created() {
        this.User = await this.$http.auth.me();
    }
}