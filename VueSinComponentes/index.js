const app= new Vue({
el:"#main",
data:{
    mostrar:false,
    tema:true,
    filtro:"",
    tarea:"",
    tareas:[{titulo:"Lavar la ropa",completado:false},
    {titulo:"Lavar los platos",completado:false},{titulo:"Lavar los dientes",completado:true}
    ],
    personas:[]
},
methods:{
    agregarTarea(){
        
    this.tareas.push({titulo:this.tarea,completado:false})
    },
    completarTarea(tarea){
        tarea.completado=!tarea.completado
    },cambiarTema(){
        this.tema=!this.tema
    },
    onMostrar(){
        this.mostrar=!this.mostrar
    },
    
}
,computed:{
    tareasCompletadas(){
        return this.tareas.filter((item)=>item.completado)
    },
    filtrarTitulo(){
      return this.tareas.filter((item)=>item.titulo.includes(this.filtro)&&!item.completado)
    }
   
    
}
,mounted(){
    console.log("On init")
    axios.get("https://jsonplaceholder.typicode.com/users").then(respuesta=>{
        console.log(respuesta.data)
        this.personas=respuesta.data
    })
}
})