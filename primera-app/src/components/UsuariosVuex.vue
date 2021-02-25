<template>
    <div>
        
        <h1>Usuarios vuex</h1>
        <p v-for="usuario in usuarios" :key="usuario.nombre"> {{usuario.nombre}}</p>
        <hr>
        <h1>Usuarios Axios</h1>
    <p v-for="usuario in usuariosAxios" :key="usuario.name"> {{usuario.name}}</p>
        <hr>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'

export default {
   
    name:"UsuariosVuex",
    // computed:mapGetters(["usuariosActivos"]) //si uso así tengo llamar directo como {{usuariosActivos}}
    computed:
    {
        ...mapGetters({usuarios:"usuariosActivos"}), //aqui renombro la propiedad que me llega
        ...mapState(['usuariosAxios'])
    },
    methods:{
        ...mapActions(['getUsuarios'])
    },mounted(){
        this.getUsuarios()
    }
    
}
</script>