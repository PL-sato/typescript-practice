<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import * as Vuex from 'vuex';

@Component
export default class HelloWorld extends Vue {
  $store!: Vuex.ExStore;
  get double() {
    return this.$store.getters['counter/double']
  }
  increment(payload: {amount: number}) {
    this.$store.commit('counter/setCount', payload);
  }
}

</script>