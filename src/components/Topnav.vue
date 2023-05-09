<template>
    <div class="topnav">
      <span class="toggleAside" @click="toAside">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu"></use>
          </svg>
      </span>
        <div class="logo">
            <router-link to="/">
                <svg class="icon" aria-hidden="true" style="color: #cc724d">
                    <use xlink:href="#icon-cola"></use>
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
    //border: 1px solid red;
//background: #eaeae9;
    display: flex;
    padding: 16px 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    font-size: 20px;
    align-items: center;

    > .logo {
      max-width: 6em;
      margin-right: auto;
      font-size: 36px;
    }


    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
        //font-size: 20px;
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
      font-size: 30px;
      line-height: 24px;


    }

    @media (max-width: 700px) {
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
  @media (max-width: 700px) {
    .topnav{
      background: #edeceb;
      border: 1px solid #999;
    }
    .zx .ys{
      display: none;
    }


  }
</style>
