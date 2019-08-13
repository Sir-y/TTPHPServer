<template>
  <div class="Selected">
    <div class="box">
      <a href="#" class="a1">女装</a>
      <a href="#" class="a2">裙子</a>
      <a href="#" class="a2">男装</a>
      <a href="#" class="a2">女鞋</a>
      <a href="#" class="a2">内衣</a>
      <a href="#" class="a2">童装</a>
      <a href="#" class="a2">包包</a>
      <a href="#" class="a2">配饰</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selected',
  data () {
    return {
      msg: 'Selected'
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 170px;
  background: #ffecee;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  a {
    display: block;
    width: calc(100% / 4);
    height: 85px;
    background: #ffecee;
    text-align: center;
    line-height: 85px;
    font-size: 28px;
    color: #ffa2b0;
  }
  .a1 {
    color: #ffffff;
    background: #ff3b6e;
  }
}
</style>
