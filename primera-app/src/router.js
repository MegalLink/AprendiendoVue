import UsuariosVuex from './components/UsuariosVuex'
import Padre from './components/Padre'
import ComponenteSlot from './components/SlotComponent'
import Contador from './components/Contador'
import Posts from './components/Posts'
export const routes=[
    {path:'/',component:UsuariosVuex},
    {path:'/Padre',component:Padre},
    {path:'/SlotComponent',component:ComponenteSlot},
    {path:'/Contador',component:Contador},
    {path:'/Posts/:id',component:Posts}
    
]