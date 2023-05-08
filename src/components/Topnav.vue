<template>
    <div class="topnav">
      <span class="toggleAside" @click="toAside">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu"></use>
          </svg>
      </span>
        <div class="logo">
            <router-link to="/">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gaoxiaoquwei"></use>
                </svg>
            </router-link>
        </div>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible') //git
            // console.log('topnav 获取的 asideVisible 为:' + asideVisible.value)
            const toAside = () => {
                asideVisible.value = !asideVisible.value
            }
            return {toAside}
        }
    }
</script>

<style lang="scss" scoped>
  .topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    > .logo {
      max-width: 6em;
      margin-right: auto;
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    .toggleAside {
      display: none;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);


    }

    @media (max-width: 500px) {
      .menu {
        display: none
      }
      .logo {
        margin: 0 auto
      }
      .toggleAside {
        display: inline-block;


      }
    }
  }
</style>
