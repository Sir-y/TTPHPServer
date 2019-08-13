<template>
  <div class="box">
    <ul class="uls">
      <router-link tag="li" to="/ShoppingMall/">
        <i class="iconfont">&#xe635;</i>
        <p>连衣裙</p>
      </router-link>
      <router-link tag="li" to="/ShoppingMall/Jacket">
        <i class="iconfont">&#xe692;</i>
        <p>上衣</p>
      </router-link>
      <router-link tag="li" to="/ShoppingMall/Bottling">
        <i class="iconfont">&#xe628;</i>
        <p>下装</p>
      </router-link>
      <router-link tag="li" to="/ShoppingMall/Suit">
        <i class="iconfont">&#xe62b;</i>
        <p>套装</p>
      </router-link>
      <router-link tag="li" to="/ShoppingMall/Matching">
        <i class="iconfont">&#xe668;</i>
        <p>鞋包配</p>
      </router-link>
      <router-link tag="li" to="/ShoppingMall/Beauty">
        <i class="iconfont">&#xe730;</i>
        <p>美妆</p>
      </router-link>
      <router-link tag="li" to="/ShoppingMall/Life">
        <i class="iconfont">&#xe62a;</i>
        <p>生活</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navlist'
}
</script>

<style scoped>
.box {
  width: 100%;
  overflow-x: scroll;
}
.uls {
  width: 1000px;
  list-style: none;
  background: #fff;
  list-style: none;
  height: 110px;
  border-top: 1px solid #ddd;
  /* position: fixed; */
  top: 340px;
  /* z-index: 999; */
  display: flex;
}
.uls li {
  display: flex;
  width: 300px;
  /* flex: 1; */
  flex-direction: column;
  height: 110px;
  text-align: center;
}
.uls li.router-link-exact-active.router-link-active {
  color: red;
  border-bottom: 2px solid red;
}
.uls li i {
  font-size: 30px;
  margin-top: 20px;
}
.uls li p {
  font-size: 26px;
  margin-top: 10px;
}
</style>
