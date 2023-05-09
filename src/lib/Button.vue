<template>

    <button class="gulu-button" :class="classes">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from "vue";

    export default {
        props: {
            theme: {
                type: String,
                default: 'button'
            },

            size: {
                type: String,
                default: "normal"
            }
        },
        setup(props) {
            const {theme, size} = props;
            const classes = computed(() => {
                return {
                    [`gulu-theme-${theme}`]: theme,
                    [`gulu-size-${size}`]: size,
                };
            });
            return {classes}
        }
    }
</script>

<style lang="scss">
  .gulu-button {
    box-sizing: border-box;
    height: 32px;
    padding: 0 12px;
    cursor: pointer;
    display: inline-block;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: #333;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: #40a9ff;
      border-color: #40a9ff;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &.gulu-theme-button {
      &.gulu-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 22px;

      }

      &.gulu-size-small {
        font-size: 10px;
        height: 20px;
        padding: 0 6px;

      }
    }
  }
</style>
