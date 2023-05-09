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
            },
            level: {
                type: String,
                default: "button"
            }
        },
        setup(props) {
            const {theme, size, level} = props;
            const classes = computed(() => {
                return {
                    [`gulu-theme-${theme}`]: theme,
                    [`gulu-size-${size}`]: size,
                    [`gulu-level-${level}`]: level,
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

    &.gulu-theme-button, &.gulu-theme-link, &.gulu-theme-text {
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

    &.gulu-size-normal {
      &.gulu-level-button {
      }

      &.gulu-level-main {
        background: #409eff;
        color: white;
        border-color: #409eff;
        &:hover {
          background: #66b1ff;
          border-color: #66b1ff;
          color: #fff;
        }
      }

      &.gulu-level-success {
        background: #67c23a;
        color: white;
        border-color: #67c23a;
        &:hover{
          background: #85ce61;
          border-color: #85ce61;
          color: #fff;
        }
      }

      &.gulu-level-warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover{
          background: #ebb563;
          color: white;
          border-color: #ebb563;
        }
      }

      &.gulu-level-danger {
        background: #f56c6c;
        color: white;
        border-color: #f56c6c;
        &:hover{
          background: #f78989;
          border-color: #f78989;
          color: #fff;
        }
      }

      &.gulu-level-info {

        background: #909399;
        color: white;
        border-color: #909399;
        &:hover{
          background: #a6a9ad;
          border-color: #a6a9ad;
          color: #fff;
        }
      }
    }
  }
</style>
