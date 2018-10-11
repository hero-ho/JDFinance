<template>
  <panel :title="'极速借贷'" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{name: 'home'}" :class="$style.link">
        <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
      </router-link>
    </section>
  </panel>
</template>
<script>
import panel from '../../../public/panel.vue'
export default {
  components: {
    panel
  }
}
</script>
<style lang="scss" module>
@import '../../../assets/css/element.scss';
.panel{
  .content{ 
    .link{
      display: block;
      overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 42.66666666666666666666666666667%;
      .img{
        display: block;
        width: 100%;
      }
    }
  }
}
</style>

