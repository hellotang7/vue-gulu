<template>
    <div class="ys"><img :src="Right"></div>
    <div class="zx"><img :src="Left"></div>
</template>

<script>
    import Right from '../assets/right.png'
    import Left from '../assets/left.png'
    export default {
        setup(){
            return{Right,Left}
        }
    }
</script>

<style lang="scss" scoped>
  @media (max-width: 700px) {

    .zx{
      display: none;
    }
    .ys{
      display: none;
    }


  }
  .ys {
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    width: 377px;
    height: 240px;
    //background-image: url("../assets/right.png");
    background-size: 377px 240px;
    background-repeat: no-repeat;


  }

  .zx {
    z-index: -1;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 500px;
    height: 500px;
    //background-image: url("../assets/left.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>
