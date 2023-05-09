<template>
    <div class="layout">
        <BackGround/>

        <Topnav class="nav"/>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol >
                    <li>
                        <router-link to="/doc/introduce">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/installation">安转</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/start">快速上手</router-link>
                    </li>

                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main @click="toAside">
                <router-view></router-view>
            </main>
        </div>

    </div>


</template>

<script lang="ts">
    import BackGround from "../components/BackGround.vue";

    import Topnav from "../components/Topnav.vue";
    import {inject, Ref} from "vue";

    export default {
        name: "Doc",
        components: {Topnav,BackGround},
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible') //git
            // console.log('topnav 获取的 asideVisible 为:'+ asideVisible.value)

            const width = document.documentElement.clientWidth


            const toAside = () => {
                if (width <= 700) {
                    asideVisible.value = false
                }
            }
            return {asideVisible,toAside}
        }
    }
</script>

<style lang="scss" scoped>



  @media (max-width: 500px) {
    .toggleAside {
      display: inline-block;
    }
  }

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;

    }

    > .content {
      flex-grow: 1;
      padding: 90px 40px 0 290px;
      @media (max-width: 700px) {
        padding-left: 0;
        padding-right:0 ;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: rgba(0, 0, 0, .2);
      min-width: 250px;
      border-radius: 6px;
      padding:98px 16px;
      z-index: 5;
      > h2 {
        margin-bottom: 4px;
      }

      > ol {
        > li {
          a {
            display: block;
            padding: 10px 22px;
            color: #3a6199;
          }
        }
      }
      @media (max-width: 700px) {
        position: fixed;
        top: 0;
        left: 0;
        background: #f9f9f9;
        min-width: 170px;

      }


    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: rgba(0, 0, 0, .1);
      border-radius: 6px;
      overflow: auto;
      @media (max-width: 700px) {
        background: #eaeae9;

      }
    }
  }


</style>
