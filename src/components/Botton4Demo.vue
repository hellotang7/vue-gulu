<demo>禁用</demo>

<template>
    <div>
        <Button disabled theme="button">disabled button</Button>
        <Button disabled theme="link">disabled link</Button>
        <Button disabled theme="text">disabled text</Button>
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
