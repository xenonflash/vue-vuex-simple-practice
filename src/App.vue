<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="increase()">increment</button>
    <button @click="reduce()">reduce</button>
    <h2>count:{{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    increase(){
     this.$store.commit('increment')    
    },
    reduce(){
      this.$store.commit('reduce') 
    }
  },
  computed: {
    count(){
        return this.$store.state.count
    }         
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
