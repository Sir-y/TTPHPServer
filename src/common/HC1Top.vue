<template>
  <div class="hc1">
    <!-- 头部搜索 -->
    <ul class="hc1-uls">
      <router-link tag="li" to="/" class="gbhc1">
        <Get-back></Get-back>
      </router-link>
      <router-link tag="li" to class="search">
        <Search-box></Search-box>
      </router-link>
      <router-link tag="li" to="/" class="gb1cart">
        <Cart></Cart>
      </router-link>
    </ul>
  </div>
</template>

<script>
import GetBack from '@/components/home/Homecontent/components/Hctop/components/GetBack'
import SearchBox from '@/components/home/Homecontent/components/Hctop/components/SearchBox'
import Cart from '@/components/home/Homecontent/components/Hctop/components/Cart'

export default {
  name: 'HC1Top',
  components: {
    GetBack,
    SearchBox,
    Cart
  }
}
</script>

<style scoped lang="less">
.hc1 {
  // position: fixed;
  border-bottom: 1 * 2px solid #c9c7c8;
  width: 100%;
  height: 45 * 2px;
  top: 0;
  line-height: 45 * 2px;
  display: -webkit-box;
  background: #fafafa;
  z-index: 99;
  .hc1-uls {
    width: 100%;
    height: 100%;
    .gbhc1 {
      width: 15%;
      height: 100%;
      color: #5e5e5e;
      font-size: 13 * 2px;
      text-decoration: none;
      float: left;
    }
    .search {
      width: 70%;
      height: 100%;
      float: left;
    }
    .gb1cart {
      display: inline-block;
      width: 15%;
      height: 100%;
    }
  }
}
</style>
