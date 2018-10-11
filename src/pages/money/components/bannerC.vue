<template lang="html">
    <section :class="$style.content">
      <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </section>
</template>

<script>
export default {

}
</script>
<style lang="scss" module>
  @import "../../../assets/css/element.scss";
    .content{
      width: 100%;
      height: 0;
      padding-bottom: 16%;
      overflow: hidden;
      .img{
        width: 100%;
        display: block;
      }
    }
</style>
