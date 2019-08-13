<template>
  <div class="LiveBroadcast">
    <!-- 头部 -->
    <LiveBroadcastTop></LiveBroadcastTop>
    <!-- 导航 -->
    <Navlisting></Navlisting>
    <router-view :LiveBroadcast="LiveBroadcast"></router-view>
  </div>
</template>

<script>
import { getLiveBroadcast } from '@/api/index'
import LiveBroadcastTop from '@/components/live/LiveBroadcast/LiveBroadcast-top'
import Navlisting from '@/common/Navlisting'
export default {
  name: 'Live',
  data () {
    return {
      LiveBroadcast: {}
    }
  },
  components: {
    LiveBroadcastTop,
    Navlisting
  },
  created () {
    getLiveBroadcast().then(({ data }) => {
      // console.log(data)
      this.LiveBroadcast = data
    })
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
