<template>
    <div>
        <p>El valor del contador es: {{this.$store.state.contador}}</p>
        <p>El valor del contador computed es: {{contador}}</p>
        <!-- Ojo con la variable de $ para llamar a algo del componente -->
        <button @click="sumar">Sumar</button>
        <button @click="restar">Restar</button>
    </div>
</template>
<script>
import {store} from "../store/store"
import {mapState} from "vuex"
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
      },
      computed:mapState(['contador'])
    //   {
    //       contador(){
    //           return this.$store.state.contador
    //       }
    //   },
}
</script>