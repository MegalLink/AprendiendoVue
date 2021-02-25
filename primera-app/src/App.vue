<template>
  <div id="app">
    <h1>Trabajar con rutas</h1>
    <router-link to="/">Vuex</router-link>
    <router-link to="/Padre">Padre</router-link>
    <router-link to="/SlotComponent">Slot Component</router-link>
    <router-link to="/Contador">Contador vuex</router-link>

    <router-view>
      <UsuariosVuex></UsuariosVuex>
      <Contador />
      <Padre />
      <ComponenteSlot>
        <!-- <h1>desde componentes</h1> -->
        <template slot="slot1"> llamando slot 1</template>
        <template slot="slot2"> llamando slot 2</template>
      </ComponenteSlot>
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

export default {
  name: "App",

  components: {
    ComponenteSlot,
    Padre,
    Elemento,
    Contador,
    UsuariosVuex,
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
</style>
