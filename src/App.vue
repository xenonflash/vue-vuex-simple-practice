<template>
  <div id="app">
    <h2>1. counter</h2>
    <button @click="increase()">increment</button>
    <button @click="reduce()">reduce</button>
    <h2>count:{{count}}</h2>
    <hr />
    <h2>2. simple todo list</h2>
    <todo-list
      @addTodo="addTodo($event)"
      @deleteTodo="deleteTodo($event)"
      v-bind:dataList="todoList"
    />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'app',
  data () {
    return {
      id: 0
    }
  },
  components: {
    TodoList,
  },
  methods: {
    increase(){
     this.$store.commit('increment')    
    },
    reduce(){
      this.$store.commit('reduce') 
    },
    addTodo(text) {
      // console.log('add todo', e);
      this.$store.commit('addTodo', {text, id: this.id++})
    },
    deleteTodo(index) {
      this.$store.commit('deleteTodo', index)
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    },
    todoList(){
      return this.$store.state.todoList
    }         
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
