<template>
  <div class="look-details">
    <p v-for="(text,i) in details" :key="i">{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'lookdetails',
  props: ['details']
}
</script>
<style lang="less" scoped>
.look-details {
  p {
    font-size: 28px;
    line-height: 40px;
    color: #000;
  }
}
</style>
