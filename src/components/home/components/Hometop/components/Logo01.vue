<template>
  <router-link to="/cate" class="logo01">
    <span class="iconfont">&#xe7ab;</span>
  </router-link>
</template>

<script>

export default {
  name: 'logo01'
}
</script>

<style lang="less" scoped>
.logo01 {
  display: block;
  width: 15%;
  height: 40 * 2px;
  float: left;
  span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 22 * 2px;
    color: #666;
    line-height: 40 * 2px;
  }
}
</style>
