<template>
    <h1>button文档</h1>
    <div class="demo">
        <h2>类型</h2>
        <div class="component">
            <Button>默认</Button>
            <Button theme="button">button</Button>
            <Button theme="link">link</Button>
            <Button theme="text">text</Button>
        </div>
    </div>
    <div class="demo">
        <h2>尺寸</h2>
        <div class="component">
            <div>
                <Button size="big" theme="button">大大</Button>
                <Button theme="button">button</Button>
                <Button size="small" theme="button">小小</Button>
            </div>
        </div>
        <div class="component">
            <div>
                <Button size="big" theme="link">大大</Button>
                <Button theme="link">link</Button>
                <Button size="small" theme="link">小小</Button>
            </div>
        </div>

        <div class="component">
            <div>
                <Button size="big" theme="text">大大</Button>
                <Button theme="text">text</Button>
                <Button size="small" theme="text">小小</Button>
            </div>
        </div>
    </div>

    <div class="demo">
        <h2>等级</h2>
        <div class="component">
            <Button>默认按钮</Button>
            <Button level="main">主要按钮</Button>
            <Button level="success">成功按钮</Button>
            <Button level="warning">警告按钮</Button>
            <Button level="danger">危险按钮</Button>
            <Button level="info">信息按钮</Button>
        </div>
        <div class="component">
            <Button theme="link">link按钮</Button>
            <Button theme="link" level="main">主要按钮</Button>
            <Button theme="link" level="success">成功按钮</Button>
            <Button theme="link" level="warning">警告按钮</Button>
            <Button theme="link" level="danger">危险按钮</Button>
            <Button theme="link" level="info">信息按钮</Button>
        </div>
        <div class="component">
            <Button theme="text">text按钮</Button>
            <Button theme="text" level="main">主要按钮</Button>
            <Button theme="text" level="success">成功按钮</Button>
            <Button theme="text" level="warning">警告按钮</Button>
            <Button theme="text" level="danger">危险按钮</Button>
            <Button theme="text" level="info">信息按钮</Button>

        </div>
    </div>


    <div class="demo">
        <h2>禁用</h2>
        <div class="component">
            <Button disabled theme="button">disabled button</Button>
            <Button disabled theme="link">disabled link</Button>
            <Button disabled theme="text">disabled text</Button>
        </div>
    </div>

    <div class="demo">
        <h2>加载</h2>
        <div class="component">
            <Button loading>加载中...</Button>
        </div>
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
