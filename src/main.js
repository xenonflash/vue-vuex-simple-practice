import Vue from 'vue'
import App from './App.vue'
import El from './pages/El.vue'
import Todo from './pages/Todo.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    component: App
  }, {
    path: '/el',
    component: El
  }, {
    path: '/todo',
    component: Todo
  }]
})
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
  router,
  render: h => h(App)
})
