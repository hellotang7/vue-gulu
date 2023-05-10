<template>
    <h1>Dialog 对话框</h1>

    <div class="demo">
    <h2>基本</h2>
    <Button  @click="toggle">toggle</Button>
    <Dialog
            v-model:visible="x"
            :closeOnClickOcerlay="false"
            :ok="f1"
            :cancel="f2"
    >
        <template v-slot:content>
        <div>你好</div>
        <div>你好</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
    </div>

    <div class="demo">
    <h2>简易</h2>
    <Button @click="showDialog">show</Button>
    </div>

</template>

<script lang="ts">
    import Button from "../lib/Button.vue"
    import Dialog from "../lib/Dialog.vue";
    import {ref} from "vue";
    import { openDialog } from "../lib/openDialog";

    export default {
        components:{Dialog,Button},
        setup(){
            const x = ref(false)

            const toggle = ()=>{
                x.value = !x.value
            }
            const f1 = ()=>{
                // return false
            }
            const f2 = ()=>{
            }
            const showDialog  = ()=>{
               openDialog({
                       title:'标题',
                       content:'你好',
                   ok(){
                       console.log('ok')
                   },
                   cancel(){
                       console.log('cancel')},
                   })
            }

            return {x,toggle,f1,f2,showDialog}
        }
    }
</script>

<style lang="scss" scoped>

</style>
