<template>
  <div>
      <holder/>
      <slider/>
      <sign-in/>
      <recommend/>
      <more/>
      <foot :cname="$style.cname"/>
      <navbar/>
  </div>
</template>

<script>
import holder from "../../public/header.vue"
import foot from "../../public/footer.vue"
import navbar from "../../public/navbar.vue"
import slider from "./components/rSlider.vue"
import signIn from "./components/signIn.vue"
import recommend from "./components/recommend.vue"
import more from "./components/more.vue"

export default {
  components: {
    holder,
    slider,
    foot,
    navbar,
    signIn,
    recommend,
    more
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
