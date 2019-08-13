<template>
  <div class="hc2 divs">
    <HC1-top :nap="namep"></HC1-top>
    <!-- 围墙导航部分 -->
    <WallNavi01></WallNavi01>
    <WallPrice></WallPrice>
    <router-view></router-view>
    <!-- <we-look :look="content"></we-look> -->
  </div>
</template>

<script>
// 导入子组件
// import HC1Top from '@/components/home/Homecontent/components/Hctop/HC1Top'
import HC1Top from '@/common/HC1Top'
// import WallNavi01 from '@/components/home/Homecontent/components/Hctop/components/WallNavi01'
import WallNavi01 from '@/common/WallNavi01'
// WallPrice
import WallPrice from '@/components/home/Homecontent/components/Hctop/components/WallPrice'
// 导入下面的组件

export default {
  name: 'HomeContent2',
  props: ['namep'],
  created () {
    // console.log(this.$route)
  },
  data () {
    return {
      content: null
    }
  },
  components: {
    HC1Top,
    WallNavi01,
    WallPrice
  }
}
</script>

<style scoped>
.hc2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(241, 241, 241);
  z-index: 1000;
}
</style>
