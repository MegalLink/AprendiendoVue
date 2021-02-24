<template>
  <div id="app">
    <Padre/>
<ComponenteSlot>
<!-- <h1>desde componentes</h1> -->
<template slot="slot1"> llamando slot 1</template>
<template slot="slot2"> y llamando slot 2</template>

</ComponenteSlot>
<Usuarios v-for="usuario in usuarios" :key="usuario.id" :name="usuario.name" :email="usuario.email" :phone="usuario.phone"></Usuarios>

  </div>
</template>

<script>
import axios from 'axios'
import Usuarios from './components/Usuarios'
import ComponenteSlot from './components/SlotComponent'
import Padre from './components/Padre'
export default {
  name: 'App',
  components: {
   Usuarios,ComponenteSlot,Padre,
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
