<template>
    <div>
        <button @click="mostrar=true"> Mostrar componente hijo</button>
        <h1>Soy el padre</h1>
        <Hijo @cerrar="mostrar=false" v-show="mostrar"></Hijo>
    </div>
</template>
<script>
import Hijo from './Hijo'
export default {
    name:"Padre",
    components:{
        Hijo,
                },
    data(){
        return {
            mostrar:false
            }
        }
}
</script>