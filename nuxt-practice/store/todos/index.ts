import {Getters, Mutations, Actions} from 'vuex';
import {S, G, M, A} from './type';

export const state = (): S => ({
  todos: []
})

export const getters: Getters<S, G> = {
  target(state) {
    return id => state.todos.filter((todo) => todo.id === id)[0];
  }
}

export const mutations: Mutations<S, M> = {
  setTodos(state, payload) {
    state.todos = payload.todos;
  },
}

export const actions: Actions<S, A, G, M> = {
  asyncTodos(ctx, payload) {
    ctx.commit('setTodos', {todos: payload.todos})
  },
}