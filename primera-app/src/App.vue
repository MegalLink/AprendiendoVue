<template>
  <div id="app">
    <h1>Trabajar con rutas</h1>
    <router-link to="/" tag="li" exact>Vuex</router-link>
    <router-link to="/Padre" tag="li" active-class="active">Padre</router-link>
    <router-link to="/SlotComponent" tag="li"><a>Slot component</a></router-link>
    <router-link to="/Contador" tag="li">Contador vuex</router-link>
    <router-link to="/Posts/01" tag="li">Posts</router-link>
    <button @click="navegarInicio" >Push hacia una dirección</button>
    <router-view>
      <UsuariosVuex></UsuariosVuex>
      <Contador />
      <Padre />
      <ComponenteSlot>
        <!-- <h1>desde componentes</h1> -->
        <template slot="slot1"> llamando slot 1</template>
        <template slot="slot2"> llamando slot 2</template>
      </ComponenteSlot>
      <Posts/>
    </router-view>
    <Elemento tipo="h1"> Texto de este elemento h1</Elemento>
  </div>
</template>

<script>
import axios from "axios";

import ComponenteSlot from "./components/SlotComponent";
import Padre from "./components/Padre";
import Elemento from "./components/Elemento";
import Contador from "./components/Contador";
import UsuariosVuex from "./components/UsuariosVuex";
import Posts from "./components/Posts"

export default {
  name: "App",

  components: {
    ComponenteSlot,
    Padre,
    Elemento,
    Contador,
    UsuariosVuex,Posts
  },
  data() {
    return {
      usuarios: [],
    };
  },
  methods: {
    obtenerUsuarios() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((respuesta) => {
          this.usuarios = respuesta.data;
        });
    },
    navegarInicio(){
      this.$router.push('/')
    }
  },
  mounted() {
    this.obtenerUsuarios();
  },
};
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
.router-link-active{
  background-color: orange;
}
.active{
  background-color: red;
}
</style>
