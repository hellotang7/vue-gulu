<template>
    <div>button文档</div>
    <h1>示例1</h1>
    <div>
        <Button>默认</Button>
        <Button theme="button">button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <h2>button</h2>
        <div>
            <Button size="big">大大</Button>
            <Button>默认</Button>
            <Button size="small">小小</Button>
        </div>
        <h2>link</h2>
        <div>
            <Button size="big" theme="link">大大</Button>
            <Button theme="link">默认</Button>
            <Button size="small" theme="link">小小</Button>
        </div>
        <h2>text</h2>
        <div>
            <Button size="big" theme="text">大大</Button>
            <Button theme="text">默认</Button>
            <Button size="small" theme="text">小小</Button>
        </div>

    </div>
    <h1>示例3</h1>
    <div>
        <Button theme="link" >默认按钮</Button>
        <Button theme="link" level="main">主要按钮</Button>
        <Button theme="link" level="success">成功按钮</Button>
        <Button theme="link" level="warning">警告按钮</Button>
        <Button theme="link" level="danger">危险按钮</Button>
        <Button theme="link" level="info">信息按钮</Button>

    </div>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {
        name: "",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>
