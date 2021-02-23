<template>
    <div>
        <p>El nombre es:{{nombre}}</p>
        <p> La edad que tiene es:{{person}}</p>

    </div>
</template>
<script>
export default {
    name:"Persona",
    props:['nombre','edad']
}
</script>
