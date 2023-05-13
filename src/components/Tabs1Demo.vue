<demo>常规</demo>

<template>
    <div>
        <Tabs  v-model:selected="x">
            <tab title="导航1">内容1</tab>
            <tab title="导航22222222">内容2</tab>
        </Tabs>
    </div>
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
            const x = ref('导航22222222')
            return {
                x
            }
        }
    }
</script>

<style scoped>

</style>
