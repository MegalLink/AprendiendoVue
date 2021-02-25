<template>
    <div><h1>Posts parametro ruta:{{id}}</h1></div>
</template>
<script>
export default {
    name:"Posts",
    data(){
        const {id}=this.$route.params
        return{
            id:id,
        }
    },
    watch:{
         '$route'(to){this.id=to.params.id}
    }
}
</script>