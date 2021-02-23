<template>
    <div>
        <h1> Hola
            <slot name="slot1">
                Si no mandas datos renderizo esto por default en slot 1
                <!-- Si no mando nada desde el otro componente se renderiza slot 1 -->
            </slot>
            <slot name="slot2">
                 Si no mandas datos renderizo esto por default en slot 2
                <!-- Si no mando nada desde el otro componente se renderiza slot 2-->
            </slot>
        </h1>
    </div>
</template>
<script>
export default {
    name:"ComponenteSlot"    
}
</script>
