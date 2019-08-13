<template>
  <router-link to="/Me" class="class-a iconfont">&#xe618;</router-link>
</template>

<script>
import Record from '@/components/me/components/Record'
export default {
  name: 'Classify',
  components: {
    Record
  }
}
</script>

<style lang="less" scoped>
.class-a {
  display: block;
  position: absolute;
  top: 1 * 2px;
  right: 0;
  width: 15%;
  height: 40 * 2px;
  text-align: center;
  font-size: 25 * 2px;
  color: #7a8992;
  line-height: 40 * 2px;
}
</style>
