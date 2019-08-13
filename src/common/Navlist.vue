<template>
  <ul class="navlist">
    <!-- 首页 -->
    <router-link tag="li" to="/">
      <span class="iconfont">&#xe6e8;</span>
      首页
    </router-link>
    <!-- 商城 -->
    <router-link tag="li" to="/Store">
      <span class="iconfont">&#xe606;</span>
      商城
    </router-link>
    <!-- 直播 -->
    <router-link tag="li" to="/live">
      <span class="iconfont">&#xe8d2;</span>
      直播
    </router-link>
    <!-- 我 -->
    <router-link tag="li" to="/Me">
      <span class="iconfont">&#xe60b;</span>
      我
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Navlist'
}
</script>

<!-- scoped 该样式样式只作用于当前的组件 -->
<style lang="less" scoped>
.navlist {
  width: 100%;
  list-style: none;
  border-top: 1 * 2px solid #ddd;
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 6 * 2px 0 6 * 2px 0;
  z-index: 999;
  background: #fff;

  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 10 * 2px;
    // &表示当前元素  代替当前元素
    &.router-link-exact-active.router-link-active {
      color: orangered;
    }
    .iconfont {
      font-size: 25 * 2px;
      margin-bottom: 2 * 2px;
    }
  }
}
</style>
