<template>
  <div class="LiveBroadcast">
    <!-- 头部 -->
    <LiveBroadcastTop></LiveBroadcastTop>
    <!-- 导航 -->
    <Navlisting></Navlisting>
    <router-view></router-view>
  </div>
</template>

<script>
import { getLiveBroadcast, getStoreSales } from '@/api/index'
import LiveBroadcastTop from '@/components/live/LiveBroadcast/LiveBroadcast-top'
import Navlisting from '@/common/Navlisting'
export default {
  name: 'LiveBroadcast',
  data () {
    return {
      LiveBroadcast: {}
    }
  },
  created () {
    console.log('123')
    getLiveBroadcast().then(({ data }) => {
      console.log('123')
      console.log('函数调用', data)
      // this.LiveBroadcast = data
    })
    getStoreSales().then(({ data }) => {
      console.log('123')
      console.log('函数调用', data)
      // this.LiveBroadcast = data
    })
  },
  components: {
    LiveBroadcastTop,
    Navlisting
  }
}

</script>

<style lang="less" scoped>
.LiveBroadcast {
  margin-bottom: 80 * 2px;
}
.dh {
  width: 100%;
  margin-top: 47 * 2px;
}
.uls {
  list-style: none;
  background: #fff;
  list-style: none;
  height: 75 * 2px;
  border-top: 1 * 2px solid #ddd;
  position: fixed;
  top: 47 * 2px;
  z-index: 999;
  width: 100%;
  display: flex;
}
.uls li {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 75 * 2px;
  text-align: center;
}
.uls li.router-link-exact-active.router-link-active {
  color: red;
}
.uls li p {
  font-size: 16 * 2px;
  line-height: 75 * 2px;
}
</style>
