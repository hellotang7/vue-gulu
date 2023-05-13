<demo>等级</demo>

<template>
    <div >
        <Button>默认按钮</Button>
        <Button level="main">主要按钮</Button>
        <Button level="success">成功按钮</Button>
        <Button level="warning">警告按钮</Button>
        <Button level="danger">危险按钮</Button>
        <Button level="info">信息按钮</Button>
    </div>
    <div>
        <Button theme="link">link按钮</Button>
        <Button theme="link" level="main">主要按钮</Button>
        <Button theme="link" level="success">成功按钮</Button>
        <Button theme="link" level="warning">警告按钮</Button>
        <Button theme="link" level="danger">危险按钮</Button>
        <Button theme="link" level="info">信息按钮</Button>
    </div>
    <div>
        <Button theme="text">text按钮</Button>
        <Button theme="text" level="main">主要按钮</Button>
        <Button theme="text" level="success">成功按钮</Button>
        <Button theme="text" level="warning">警告按钮</Button>
        <Button theme="text" level="danger">危险按钮</Button>
        <Button theme="text" level="info">信息按钮</Button>
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
