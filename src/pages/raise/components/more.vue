<template lang="html">
    <panel title="更多福利" :class="$style.panel">
      <section :class="$style.content">
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
        </div>
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
        </div>
        <div :class="$style.pack">
          <img :class="$style.img"  src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
        </div>
        <span :class="$style.welfare"> 专享福利 </span>
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
@import '../../../assets/css/element.scss';
.panel {
  @include panel;
  .content {
    @include flex(row);
    position: relative;
    padding-bottom: 30px;
    .pack {
      width: 33.333333333333333%;
      height: 0;
      padding-bottom: 44%;
      overflow: hidden;
      .img {
        width: 100%;
      }
    }
    .welfare {
      position: absolute;
      right: 20px;
      top: -112px;
      font-size: 28px;
      color: #999;
      height: 112px;
      line-height: 112px;
    }
  }
}
</style>
