<template>
  <div class="shopcart">
    <shopcart-top></shopcart-top>
    <shopcart-list></shopcart-list>
    <we-look :look="look"></we-look>
  </div>
</template>

<script>
import { getWeLook } from '@/api/index'
import ShopcartTop from '@/components/shop/shopcart/ShopcartTop'
import ShopcartList from '@/components/shop/shopcart/ShopcartList'
import WeLook from '@/components/shop/shopcart/WeLook'
export default {
  name: 'ShopCart',
  data () {
    return {
      look: []
    }
  },
  components: {
    ShopcartTop,
    ShopcartList,
    WeLook
  },
  created () {
    getWeLook().then(({ data }) => {
      // console.log(data)
      this.look = data.data
    })
  }
}
</script>

<style lang="less" scoped>
.shopcart {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
}
</style>
