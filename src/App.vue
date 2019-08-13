<template>
  <div id="app">
    <!-- 头部广告组件 -->
    <Downapp></Downapp>
    <HomeTop></HomeTop>
    <Search01 v-show="flag"></Search01>
    <router-view class="container" />
    <!-- 底部导航组件 -->
    <Navlist></Navlist>
  </div>
</template>

<script>
import HomeTop from '@/common/HomeTop'

import Navlist from '@/common/Navlist'
import Downapp from '@/common/Downapp'
import Search01 from '@/common/Search'
export default {
  name: 'App',
  components: {
    Navlist,
    Downapp,
    Search01,
    HomeTop
  },
  data () {
    return {
      flag: false
    }
  }
}
</script>

<style lang="less" scoped>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
