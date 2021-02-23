<template>
  <div id="app">
<h1>Hola</h1>
<Persona nombre="Juan" edad="13"></Persona>
  </div>
</template>

<script>


import Persona from './components/Persona'
export default {
  name: 'App',
  
  components: {
   Persona

  },
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
