<template>
    <div>
       <p>Nombre:{{name}}</p>
       <p>Email:{{email}}</p>
       <p>Telefono:{{phone}}</p>
       <hr>
    </div>
</template>
<script>
export default {
name:"Usuarios",
props:{name:{
    type:String,
    default:"No hay el dato",
    required:true
}
,email:String,phone:String}
}
</script>
