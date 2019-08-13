<template>
  <div class="catetop">
    <router-link class="cust" to="/Me" tag="div">
      <span class="iconfont">&#xe70a;</span>
    </router-link>
    <div class="search">
      <span class="iconfont">&#xe9cf;</span>
      <input type="text" value="汉服" />
    </div>
    <router-link class="cart" to="/ShopCart" tag="div">
      <span class="iconfont">&#xe6a9;</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Catetop'
}
</script>
<style lang="less" scoped>
.catetop {
  height: 30 * 2px;
  width: 100%;
  z-index: 99;
  background: #fff;
  border-bottom: 1 * 2px solid #eee;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 15 * 2px 1%;
  .cust,
  .cart {
    width: 15%;
    text-align: center;
    .iconfont {
      font-size: 23 * 2px;
      line-height: 30 * 2px;
      color: #666;
    }
  }
  .search {
    width: 68%;
    background: #eee;
    border-radius: 5;
    display: flex;
    flex-direction: row;
    .iconfont {
      font-size: 15 * 2px;
      line-height: 30 * 2px;
      margin-left: 10 * 2px;
      color: #999;
    }
    input {
      flex: 1;
      background: transparent;
      margin-left: 10 * 2px;
      color: #999;
    }
  }
}
</style>
