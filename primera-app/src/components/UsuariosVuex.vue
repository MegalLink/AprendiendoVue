<template>
    <div>
        
        <h1>Usuarios vuex</h1>
        <p v-for="usuario in usuarios" :key="usuario.nombre"> {{usuario.nombre}}</p>
        <hr>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
   
    name:"UsuariosVuex",
    // computed:mapGetters(["usuariosActivos"]) //si uso así tengo llamar directo como {{usuariosActivos}}
    computed:
    {...mapGetters({usuarios:"usuariosActivos"}) //aqui renombro la propiedad que me llega
    }
    
}
</script>