<template>
  <router-view></router-view>
</template>

<script lang="ts">

    import {provide, ref} from "vue";

export default {
  name: 'App',
setup(){
      //获取页面宽度决定asideVisible
      const width = document.documentElement.clientWidth
    console.log(width)
      const asideVisible = ref(width <= 500 ? false:true)
    provide('asideVisible',asideVisible) //set
}
}
</script>
