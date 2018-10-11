<template lang="html">
  <div>
      <holder/>
      <h-slider/>
      <novice/>
      <borrow/>
      <money/>
      <recommend/>
      <life/>
      <foot/>
      <navbar/>
  </div>
</template>

<script>
import holder from "../../public/header.vue"
import foot from "../../public/footer.vue"
import navbar from "../../public/navbar.vue"
import hSlider from "./components/hSlider.vue"
import novice from "./components/novice.vue"
import borrow from "./components/borrow.vue"
import money from "./components/money.vue"
import recommend from "./components/recommend.vue"
import life from "./components/life.vue"
export default {
  components: {
    holder,
    hSlider,
    novice,
    borrow,
    money,
    recommend,
    life,
    foot,
    navbar
  }
}
</script>

<style lang="scss" module>
</style>
