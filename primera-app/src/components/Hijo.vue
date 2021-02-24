<template>
    <div>
        <h1>Soy el hijo</h1>
        <button   @click="emitirEvento">Cerrar Hijo</button>
    </div>
</template>
<script>
export default {
    name:"Hijo",
    methods:{
        emitirEvento(){
            this.$emit('cerrar') //Emite linealmente al padre
            }
        }
}
</script>