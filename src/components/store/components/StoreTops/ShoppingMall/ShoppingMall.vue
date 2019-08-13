<template>
  <div class="ShoppingMall">
    <div ref="top">
      <HotSellingList :data="data"></HotSellingList>
    </div>
    <!-- 导航 -->
    <HotSellingLists ref="move"></HotSellingLists>
    <router-view :data="data"></router-view>
  </div>
</template>

<script>
'@/components/store/components/StoreTops/ShoppingMall/ShoppingMall'
import { getShoppingMall } from '@/api/index'
import HotSellingLists from '@/components/store/components/StoreTops/ShoppingMall/Shopping/HotSellingList'
import HotSellingList from '@/components/store/components/StoreTops/ShoppingMall/Shopping/HotSellingList-top'
import Dress from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Dress'
import Jacket from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Jacket'
import Bottling from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Bottling'
import Suit from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Suit'
import Life from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Life'

export default {
  name: 'ShoppingMall',
  data () {
    return {
      data: [],
      top: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    scrollToTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var h = this.$refs.top.offsetHeight
      // console.log(h)
      // console.log(scrollTop)
      if (scrollTop > h) {
        // console.log(this.$refs.move.$el)
        this.$refs.move.$el.style.position = 'fixed'
        this.$refs.move.$el.style.zIndex = 999
        this.$refs.move.$el.style.top = 0 + 'px'
        this.$refs.move.$el.style.width = 100 + '%'
      } else if (scrollTop <= h) {
        this.$refs.move.$el.style.position = 'static'
        this.$refs.move.$el.style.zIndex = 0
        this.$refs.move.$el.style.top = 0 + 'px'
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  components: {
    HotSellingLists,
    HotSellingList,
    Dress,
    Jacket,
    Bottling,
    Suit,
    Life
  },
  created () {
    getShoppingMall().then(({ data }) => {
      this.data = data
    })
  }
}
</script>

<style lang="less" scoped>
.ShoppingMall {
  padding-bottom: 120px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.one {
  position: fixed;
  top: 0px;
}
</style>
