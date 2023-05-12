<template>

    <div>
        <h1>button文档</h1>
        <Demo :component="Button1Demo" />
        <Demo :component="Button2Demo" />
        <Demo :component="Button3Demo" />
        <Demo :component="Button4Demo" />
        <Demo :component="Button5Demo" />
    </div>

</template>

<script lang="ts">
    import Button1Demo from './Botton1Demo.vue'
    import Button2Demo from './Botton2Demo.vue'
    import Button3Demo from './Botton3Demo.vue'
    import Button4Demo from './Botton4Demo.vue'
    import Button5Demo from './Botton5Demo.vue'
    import Demo from './Demo.vue'
    export default {
        components: {
            Demo
        },
        setup() {
            return {
                Button1Demo,
                Button2Demo,
                Button3Demo,
                Button4Demo,
                Button5Demo
            };
        },
    }
</script>

<style scoped>

</style>
