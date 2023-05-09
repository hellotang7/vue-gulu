<template>
    <div>

<BackGround/>
        <div class="banner">
            <div class="top">
                <Topnav/>
                <h1>可乐 UI </h1>
                <h2>一个普普通通 平平无奇 的 UI 框架</h2>
                <p class="actions">
                    <a href="https://github.com/hellotang7/vue-gulu">GitHub</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
            <div class="button">
                <ul>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-vuejs-line"></use>
                        </svg>
                        <h3>基于 Vue 3</h3>
                        <p data-v-fae5bece="">骄傲地使用了 Vue 3 Composition API</p></li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ts"></use>
                        </svg>
                        <h3>基于 TypeScript </h3>
                        <p data-v-fae5bece="">源代码采用 TypeScript 书写（非严格检查）</p></li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dengpao"></use>
                        </svg>
                        <h3>代码易读</h3>
                        <p data-v-fae5bece="">每个组件的源代码都极其简洁</p></li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import Topnav from "../components/Topnav.vue";
import BackGround from "../components/BackGround.vue";
    export default {
        name: "home",
        components: {Topnav,
            BackGround}
    }
</script>

<style lang="scss" scoped>


  .banner {

    height: 100vh;
    padding: 90px 0;


    flex-direction: column;

    text-align: center;

    .top {
      //border: 1px solid red;
      width: 100%;
      //margin: 0 auto 80px auto;
      padding: 50px 0;

      h2 {
        padding: 20px 0
      }

      .actions {
        padding: 8px 0;

        a {
          margin: 0 8px;
          background: #f9bfaf;
          display: inline-block;
          $h: 38px;
          height: $h;
          line-height: $h;
          border-radius: $h/4;
          padding: 0 24px;
          color: #bf6950;
        }
      }
    }

    .button {
      //border: 1px solid red;
      width: 100%;
      margin: 32px auto 100px;

      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        li {

          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          width: 300px;
          padding: 0 40px;
          color: #264065;

          svg {
            width: 74px;
            height: 74px;
            margin: auto;


          }

          h3 {
            font-size: 1.5em
          }

          p {
            font-size: 14px
          }
        }
      }
    }
  }


</style>
