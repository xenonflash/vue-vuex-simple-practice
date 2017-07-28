<template>
  <div>
    <add-todo @change="addTodo"/>
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        {{item.id + item.text}}
        <button @click="deleteTodo(index)">delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import AddTodo from './AddTodo.vue'
export default {
  name: 'TodoList',
  updated: function() {
    console.log(this.dataList)
  },
  props: ['dataList'],
  components: {
    AddTodo,
  },
  methods: {
    addTodo(e) {
      this.$emit('addTodo', e);
    },
    deleteTodo(index){
      this.$emit('deleteTodo', index)
    }
  },
}
</script>
<style>

</style>

