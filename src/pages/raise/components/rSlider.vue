<template>
    <section :class="$style.content">
        <swiper :options="options">
        <swiper-slide>百万白条券免费送，速来领取！ <em :class="$style.arrow"> > </em> </swiper-slide>
        <swiper-slide>签到领流量，1元500M！<em :class="$style.arrow"> > </em> </swiper-slide>
      </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import panel from "../../../public/panel.vue"
export default {
  components: {
    panel,
    swiper,
    swiperSlide
  },
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: "vertical",
      }
    }
  }
}
</script>
<style lang="scss" module>
    .content{
      height: 72px;
      line-height: 72px;
      overflow: hidden;
      padding-left: 178px;
      background: #fff url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
      font-family: PingFangSC;
      font-size: 28px;
      color: #333;
      .arrow{
        color: #ddd;
        float: right;
        margin-right: 20px;
      }
    }
</style>

<style lang="scss" scoped>
  .swiper-container-vertical{
    height: 72px;
  }
</style>
