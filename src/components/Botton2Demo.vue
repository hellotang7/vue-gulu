<demo>尺寸</demo>

<template>
    <div>
        <Button size="big" theme="button">大大</Button>
        <Button theme="button">button</Button>
        <Button size="small" theme="button">小小</Button>
    </div>
    <div>
        <Button size="big" theme="link">大大</Button>
        <Button theme="link">link</Button>
        <Button size="small" theme="link">小小</Button>
    </div>
    <div>
        <Button size="big" theme="text">大大</Button>
        <Button theme="text">text</Button>
        <Button size="small" theme="text">小小</Button>
    </div>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {
        components: {
            Button
        }
    }
</script>

<style lang="scss" scoped>
  div{
    margin-bottom: 15px;
  }
</style>
