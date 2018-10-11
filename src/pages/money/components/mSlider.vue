<template lang="html">
    <section :class="$style.content">
      <slider :items="items" :cname="$style.slider" class="slider"/>
    </section>
</template>

<script>
import slider from "../../../public/slider.vue"
export default {
  components: {
    slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
        }, 
        {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
    .content{
      .slider{
        img{
          width: 100%;
        }
      }
    }
</style>

<style lang="scss" scoped>
.slider{
  /deep/ .swiper-container{
    .swiper-slide{
      .link{
        width: 100%;
        height: 0;
        padding-bottom: 53.333333333333333333333333333%;
        .img{
          display: block;
          width: 100%;
        }
      }
    }
  }
} 
</style>