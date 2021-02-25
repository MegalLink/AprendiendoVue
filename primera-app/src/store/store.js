import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
    state:{
        contador:0,
        usuarios:[
            {nombre:"Jeferson",activo:false},
            {nombre:"Paula",activo:true}
        ]
        },
    mutations:{
        sumar(state){
            state.contador++
        },
        restar(state){
            state.contador--
        }
    },
    getters: {
      usuariosActivos: state => {
        return state.usuarios.filter(usuario => usuario.activo)
      }
    }
})

store.commit('sumar')
store.commit('restar')