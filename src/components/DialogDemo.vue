<template>
    <div>
    <h1>Dialog 对话框</h1>
        <Demo :component="Dialog1Demo"/>
        <Demo :component="Dialog2Demo"/>
    </div>
</template>

<script lang="ts">
    import Dialog1Demo from './Dialog1Demo.vue'
    import Dialog2Demo from './Dialog2Demo.vue'
    import Demo from './Demo.vue'

    export default {
        components:{Demo},
        setup(){
            return {Dialog1Demo,Dialog2Demo}
        }
    }
</script>

<style scoped>

</style>
