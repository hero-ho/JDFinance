<template>
  <article :class="$style.mt">
    <router-view/>
  </article>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss" module>
.mt{
  margin-top: 120px;
}
</style>