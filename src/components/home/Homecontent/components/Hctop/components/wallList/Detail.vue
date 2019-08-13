<template>
  <div class="detailes" v-if="detail">
    <banner :banner="banner"></banner>
    <deta-xq :xqp="detail.price"></deta-xq>
    <deta-bz :bz="detail.t"></deta-bz>
    <div class="detacm">
      <div class="xq" @click="showmodal">
        {{detail.xz.xz0}}
        <span class="iconfont">&#xe624;</span>
      </div>
      <pricemodal ref="modal" :cmxia="detail.xz.xz1"></pricemodal>
    </div>
    <ping-jia :pj="detail"></ping-jia>
    <guan-zhu :gz="detail.di"></guan-zhu>
    <xiang-qing :xq="detail.di"></xiang-qing>
    <bott @lis="mkk"></bott>
  </div>
</template>

<script>
import Banner from '@/components/home/components/Banner'
import DetaXq from '@/components/home/Homecontent/components/Hctop/components/wallList/common/DetaXq'
import DetaBz from '@/components/home/Homecontent/components/Hctop/components/wallList/common/DetaBz'
import Pricemodal from '@/components/home/Homecontent/components/Hctop/components/wallList/common/Pricemodal'
import PingJia from '@/components/home/Homecontent/components/Hctop/components/wallList/common/PingJia'
import GuanZhu from '@/components/home/Homecontent/components/Hctop/components/wallList/common/GuanZhu'
import XiangQing from '@/components/home/Homecontent/components/Hctop/components/wallList/common/XiangQing'
import Bott from '@/components/home/Homecontent/components/Hctop/components/wallList/common/Bott'
import { getDetails } from '@/api/index'
export default {
  name: 'Detail',
  data () {
    return {
      detail: null,
      banner: null,
      id: null
    }
  },
  mounted () {
    getDetails().then(({ data }) => {
      for (let a = 0; a < data.data.length; a++) {
        if (this.id === data.data[a].id) {
          this.detail = data.data[a].data
          this.banner = data.data[a].data.img
        }
      }
      // console.log(this.id)
    })
  },
  methods: {
    mkk (data) {
      this.$refs.modal.showModal()
    },
    showmodal () {
      // console.log(this.$refs.modal)
      this.$refs.modal.showModal()
    }
  },
  created () {
    this.id = this.$route.query.num
    // console.log(this.$route.query.num)
  },
  components: {
    Pricemodal,
    DetaXq,
    DetaBz,
    PingJia,
    GuanZhu,
    XiangQing,
    Bott,
    Banner
  }
}
</script>

<style lang="less" scoped>
.detailes {
  background-color: #eaeaea !important;
  padding: 0 0 50px 0;
  .detacm {
    height: 70px;
    line-height: 70px;
    padding: 0 20px 0 30px;
    background: #ffffff;
    .xq {
      background: #ffffff;
      span {
        display: block;
        float: right;
        font-size: 40px;
      }
    }
  }
}
</style>
