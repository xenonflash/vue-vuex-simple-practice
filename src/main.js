import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    todoList: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    },
    addTodo(state, todoItem) {
      state.todoList = state.todoList.concat(todoItem);
    },
    deleteTodo(state, index) {
      state.todoList = [...state.todoList.slice(0, index), ...state.todoList.slice(index + 1)]
    }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
