import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store =new Vuex.Store({
    state:{
        contador:0,
        usuarios:[
            {nombre:"Jeferson",activo:false},
            {nombre:"Paula",activo:true},
            {nombre:"Jose",activo:true},
        ],
        usuariosAxios:null
        },
    mutations:{
        sumar(state){
            state.contador++
        },
        restar(state){
            state.contador--
        },
        getUsuariosHttp(state){
            axios.get("https://jsonplaceholder.typicode.com/users").then(r=>{
                state.usuariosAxios=r.data
           
            }
            )
        }
    },
    getters: {
      usuariosActivos: (state) => {
        return state.usuarios.filter(usuario => usuario.activo)
      }
    },actions:{
        getUsuarios(context){
            context.commit('getUsuariosHttp')
        }
    }
})
// Esto es necesario apra ejecutar la funcion desde un componente
store.commit('sumar')
store.commit('restar')
//en el caso de getUsuariosHttp se esta llamando desde actions