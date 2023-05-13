<demo>类型</demo>

<template>
    <div>
    <Button>默认</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
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

<style scoped>

</style>
