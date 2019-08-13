<template>
  <div class="HotSellingList">
    <img :src="data.title" alt />
  </div>
</template>

<script>
export default {
  name: 'HotSellingList',
  props: ['data'],
  data () {
    return {
      msg: 'HotSellingList'
    }
  }
}
</script>

<style lang="less" scoped>
.HotSellingList {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
