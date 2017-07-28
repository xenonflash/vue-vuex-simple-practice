<template>
  <div>
    <input type="text" v-model="text" placeholder="请输入内容"/>
    <button @click="addTodo()">add</button>
    <span>your input is{{text}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      text: ''
    }
  },
  methods: {
    addTodo() {
      !!this.text.trim() && this.$emit('change', this.text);
    }
  }
}
</script>
<style scoped>

</style>


