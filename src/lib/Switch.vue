<template>
        <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}">
            <span></span>
        </button>
        <div>{{ value }}</div>
</template>

<script>

    export default {
        props: {
            value: Boolean
        },
        setup(props, context) {
            const toggle = () => {
                context.emit('update:value', !props.value)
            }
            return {toggle}
        },

    }
</script>

<style lang="scss">

  .gulu-switch {
    height: 22px;
    width: 44px;
    border: none;
    background: #9f9f9f;
    border-radius: 11px;
    position: relative;

    &.gulu-checked {
      background: #027be3
    }

    &.gulu-checked > span {
      left: calc(100% - 20px);
    }

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: 18px;
      width: 18px;
      background: white;
      border-radius: 11px;
      transition: left 250ms;
    }
  }


</style>
