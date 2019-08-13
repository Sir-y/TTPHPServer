<template>
  <swiper ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(banner,i) in banner" :key="i">
      <div class="pic">
        <img :src="banner" alt />
      </div>
      <div class="num">{{i+1}}&nbsp;/&nbsp;{{length}}</div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Carousel',
  props: ['banner'],
  date () {
    return {
      length: null
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.length = this.banner.length
  }
}
</script>
<style lang="less" scoped>
.pic {
  width: 100%;
  height: 940px;
  background: #f4f4f4;
  line-height: 940px;
  img {
    width: 100%;
  }
}
.num {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  font-size: 24px;
}
</style>
