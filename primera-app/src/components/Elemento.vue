
<script>
export default {
    name:"Elemento",
    props:{
        tipo:String
    },render(createElement){
        return createElement(this.tipo,this.$slots.default)
    }
}
</script>
<style scoped> 
/* Sin el scoped se propaga el estilo apra toda la aplicación */
h1{
    color: red;
    }
</style>