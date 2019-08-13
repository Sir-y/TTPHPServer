<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(v,i) in banner" :key="i">
      <a href>
        <img :src="v" alt class="pic" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>-->
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  props: ['banner'],
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style scoped>
.pic {
  width: 100%;
}
</style>
