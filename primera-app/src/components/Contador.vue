<template>
    <div>
        <p>El valor del contador es: {{this.$store.state.contador}}</p>
        <!-- Ojo con la variable de $ para llamar a algo del componente -->
        <button @click="sumar">Sumar</button>
        <button @click="restar">Restar</button>
    </div>
</template>
<script>
import {store} from "../store/store"
export default {
    name:"Contador",
    store,
    methods:{
        sumar(){
            this.$store.commit('sumar')
        },
        restar(){
            this.$store.commit('restar')
        }
    },
    mounted(){
      console.log("hola mundo",store.state.contador)
      }
}
</script>