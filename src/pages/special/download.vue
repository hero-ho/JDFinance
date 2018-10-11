<template lang="html">
    <section :class="$style.content">
        <div :class="$style.bgm"></div>
        <p :class="$style.title">立即下载</p>
        <span :class="$style.msg">copyright</span>
    </section>
</template>

<script>
</script>

<style lang="scss" module>
    @import "../../assets/css/element.scss";
    html,body{
      background: #fff;
    }
    .content{
      background: #fff;
      @include flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .bgm{
        background: url(//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
        width: 600px;
        height: 800px;
        background-size: 100% auto;
        margin-top: -200px;
      }
      .title{
        @include btn($size:32px,$color:#fff,$bgc:#F1443E,$padding:5px,$radius:5px);
        height: 100px;
        line-height: 100px;
        width: 471px;
        background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
        box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
        position: fixed;
        bottom: 90px;
      }
      .msg{
        position: fixed;
        bottom: 16px;
        font-size: 24px;
        color: #ccc;
      }
    }
</style>
