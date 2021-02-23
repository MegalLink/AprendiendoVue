<template>
  <div id="app">

<Usuarios v-for="usuario in usuarios" :key="usuario.id" :name="usuario.name" :email="usuario.email" :phone="usuario.phone"></Usuarios>

  </div>
</template>

<script>
import axios from 'axios'
import Usuarios from './components/Usuarios'
export default {
  name: 'App',
  components: {
   Usuarios
  },
  data(){
    return {
        usuarios:[],
    }
  },methods:{
    obtenerUsuarios(){
      axios.get("https://jsonplaceholder.typicode.com/users").then(
        (respuesta)=>{
          this.usuarios=respuesta.data
        }

      )
      }
    }
    ,mounted(){
      this.obtenerUsuarios()
      }
 

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
