<template>
  <div class="shopcart-list">
    <div class="topp">
      <img src="../../../../static/img/shoptopx.png" alt />
    </div>
    <p>您的购物车空空如也</p>
    <a href="#">去逛逛</a>
  </div>
</template>

<script>

export default {
  name: 'ShopcartList'
}
</script>

<style lang="less" scoped>
.shopcart-list {
  width: 100%;
  text-align: center;
  font-size: 12 * 2px;
  padding: 50 * 2px 0 100 * 2px 0;
  background: #ffffff;
  .topp {
    overflow: auto;
    img {
      display: block;
      width: 100%;
      height: 300 * 2px;
    }
  }
  a {
    display: block;
    width: 100 * 2px;
    line-height: 35 * 2px;
    border-radius: 5 * 2px;
    background: #ff5777;
    color: #ffffff;
    font-size: 15 * 2px;
    margin: 10 * 2px auto;
  }
}
</style>
