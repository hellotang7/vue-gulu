<template>
    <div class="topnav">
      <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toAside">
          <svg class="icon" >
            <use xlink:href="#icon-menu"></use>
          </svg>
      </span>
        <div class="logo aa">
            <router-link to="/">
                <svg  class="icon" aria-hidden="true" style="color: #cc724d">
                    <use xlink:href="#icon-cola"></use>
                </svg>
            </router-link>
        </div>
        <div class="menu">

                <router-link to="/doc">文档</router-link>


        </div>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        props:{
            toggleMenuButtonVisible:{
                type:Boolean,
                default:false
            }
        },
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
      font-size: 30px;
      &:hover {
        font-size: 29px;
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
      cursor: pointer;

    }

    @media (max-width: 700px) {
      .menu {
        display: none
      }
      .logo {
        margin: 0 auto;
        font-size: 32px;
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
