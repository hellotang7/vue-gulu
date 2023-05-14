<template>
    <div>

        <BackGround/>
        <div class="banner">
            <div class="top">
                <Topnav/>
                <h1>可乐 UI </h1>
                <h2>一个普普通通 平平无奇 的 UI 框架</h2>
                <div class="actions">
                    <a class="aa" href="https://github.com/hellotang7/vue-gulu">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-github-fill"></use>
                        </svg>
                    </a>
                    <router-link class="aa" to="/doc/installation">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-go"></use>
                        </svg>
                    </router-link>
                </div>
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
                        <img src="../assets/ts.png" alt="">
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
        components: {
            Topnav,
            BackGround
        }
    }
</script>

<style lang="scss" scoped>


  .banner {
    height: 100vh;
    padding: 90px 0;

    flex-direction: column;

    text-align: center;

    .top {
      width: 100%;
      padding: 50px 0;
      @media (max-width: 700px) {
        padding: 18px 0;
      }
      h2 {
        padding: 20px 0
      }

      .actions {
        height: 40px;
        a {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          margin: 0 8px;
          padding: 0 24px;

          .icon {
            width: 38px;
            height: 38px;
            transition: all .2s ease-out;
            &:hover {
              width: 36px;
              height: 36px;
            }
          }

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

          img {
            width: 66px;
            margin: auto;
            transform: translateY(-6660px);
            filter: drop-shadow(#264065 0 6660px) //颜色、x轴偏移量、y轴偏移量,这里的颜色就是你要指定的颜色，不管原来的图片是什么颜色，都会变成这个颜色
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
