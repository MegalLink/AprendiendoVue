<template>
  <div id="app">
    <UsuariosVuex></UsuariosVuex>
    <Contador/>
    <Elemento tipo="h1"> Texto de este elemento h1</Elemento>
    <Elemento tipo="h2"> Texto de este elemento h2</Elemento>
    <Elemento tipo="h3"> Texto de este elemento h3</Elemento>
    <Elemento tipo="button"> Texto de este elemento button</Elemento>
    
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
import Elemento from './components/Elemento'
import Contador from './components/Contador'
import UsuariosVuex from './components/UsuariosVuex'
import {store} from './store/store'
export default {
  name: 'App',
  store,
  components: {
   Usuarios,ComponenteSlot,Padre,Elemento,Contador,UsuariosVuex

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
