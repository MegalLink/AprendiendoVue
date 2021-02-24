
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