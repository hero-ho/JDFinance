<template>
  <panel :title="'每日签到'" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.pack">
        <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
      </div>
      <div :class="$style.pack">
        <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">      
      </div>
      <p :class="$style.text">不抢白不抢</p>
    </section>
  </panel>
</template>

<script>
import panel from "../../../public/panel.vue"
export default {
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import "../../../assets/css/element.scss";
  .panel{
    .content{
      @include flex(row);
      position: relative;
      padding-bottom: 20px;
      .pack{
        width: 50%;
        height: 0;
        padding-bottom: 21.276596%;
        overflow: hidden;
        .img{
          width: 100%;
        }
      }
      .text{
        position: absolute;
        top:-112px;
        right: 20px;
        font-size: 28px;
        color: #999;
        height: 112px;
        line-height: 112px;
      }
    }
  }
</style>
