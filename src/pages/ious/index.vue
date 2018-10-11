<template>
  <div>
      <holder/>
      <slider/>
      <welfare/>
      <service/>
      <foot/>
      <navbar/>
  </div>
</template>

<script>
import holder from "../../public/header.vue"
import foot from "../../public/footer.vue"
import navbar from "../../public/navbar.vue"
import slider from "./components/iSlider.vue"
import welfare from "./components/welfare.vue"
import service from "./components/service.vue"
export default {
  components: {
    holder,
    slider,
    foot,
    navbar,
    welfare,
    service
  }
}
</script>

