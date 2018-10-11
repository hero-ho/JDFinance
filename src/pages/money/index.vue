<template lang="html">
  <div>
      <holder/>
      <slider/>
      <banner-a/>
      <money/>
      <banner-b/>
      <finance/>
      <banner-c/>
      <foot :cname="$style.cname"/>
      <navbar/>
  </div>
</template>

<script>
import holder from "../../public/header.vue"
import foot from "../../public/footer.vue"
import navbar from "../../public/navbar.vue"
import slider from "./components/mSlider.vue"
import bannerA from "./components/bannerA.vue"
import money from "./components/money.vue"
import bannerB from "./components/bannerB.vue"
import finance from "./components/finance.vue"
import bannerC from "./components/bannerC.vue"
export default {
  components: {
    holder,
    slider,
    foot,
    navbar,
    bannerA,
    money,
    bannerB,
    finance,
    bannerC
  }
}
</script>

<style lang="scss" module>
.cname{
  li:first-child{
    display: none;
  }
}
</style>
