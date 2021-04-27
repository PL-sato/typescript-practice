import { StoreContext } from 'vuex';

export const actions = {
  nuxtServerInit(ctx: StoreContext) {
    console.log(ctx.state.counter.count);
    console.log(ctx.rootState.counter.count);
    console.log(ctx.rootGetters['counter/double']);
  }
}