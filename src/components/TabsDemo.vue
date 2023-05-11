<template>
    <div>Tabs 示例</div>
    <h1>示例1</h1>
    <Tabs  v-model:selected="x">
        <tab title="导航1">内容1</tab>
        <tab title="导航2">内容2</tab>
    </Tabs>
</template>

<script lang="ts">
    import {
        ref
    } from 'vue'
    import Tabs from '../lib/Tabs.vue'
    import Tab from '../lib/Tab.vue'
    export default {
        components:{Tabs,Tab},
        setup() {
            const x = ref('导航1')
            return {
                x
            }
        }
    }

</script>

<style scoped>

</style>
