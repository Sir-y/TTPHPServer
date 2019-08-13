<template>
  <div class="home">
    <!-- <HomeTop></HomeTop> -->
    <!-- banner -->
    <div ref="Heights" class="ddddd">
      <banner :banner="banner" class="home-ban"></banner>
      <icon :icon="Icon"></icon>
    </div>
    <find :H="H"></find>
  </div>
</template>

<script>
// 导入子组件
// import HomeTop from '@/common/HomeTop'
import { banner, icon } from '@/api/index'
import Banner from '@/components/home/components/Banner'
import Icon from '@/components/home/components/Icon'
import Find from '@/components/home/Find/Find'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'home',
      banner: [],
      Icon: {},
      H: ''
    }
  },
  components: {
    // HomeTop,
    Banner,
    Icon,
    Find
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  created () {
    banner().then(({ data }) => {
      this.banner = data.data
      // console.log(data.data)
    })
    icon().then(({ data }) => {
      this.Icon = data.data
      // console.log(data.data)
    })
  },
  methods: {
    scrollToTop () {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.H = this.$refs.Heights.offsetHeight + 90
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style scoped lang="less">
.home {
  // padding-bottom: 50 * 2px;
  .home-ban {
    margin-bottom: 5 * 2px;
  }
}
</style>
