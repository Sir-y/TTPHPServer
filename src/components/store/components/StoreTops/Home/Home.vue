<template>
  <div class="home">
    <!-- 顶部 -->
    <div ref="top">
      <Selectedtop :data="data"></Selectedtop>
    </div>
    <!-- 选项部分 -->
    <Selected ref="move"></Selected>
    <!-- 内容 -->
    <Content :data="data"></Content>
  </div>
</template>

<script>
import { getSelected } from '@/api/index'
import Selectedtop from '@/components/store/components/StoreTops/Home/Selected/Selectedtop'
import Selected from '@/components/store/components/StoreTops/Home/Selected/Selected'
import Content from '@/components/store/components/StoreTops/Home/Selected/Content'
export default {
  name: 'Home',
  /* eslint-disable */
  data() {
    return {
      data: []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    scrollToTop() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      var h = this.$refs.top.offsetHeight;
      // console.log(h)
      if (scrollTop > h) {
        // console.log(this.$refs.move.$el)
        this.$refs.move.$el.style.position = 'fixed';
        this.$refs.move.$el.style.zIndex = 999
        this.$refs.move.$el.style.top = 0 + 'px';
        this.$refs.move.$el.style.width = 100 + '%';
      } else if (scrollTop <= h) {
        this.$refs.move.$el.style.position = 'static';
        this.$refs.move.$el.style.zIndex = 0
        this.$refs.move.$el.style.top = 0 + 'px';
      }
    }
  },
  components: {
    Selectedtop,
    Selected,
    Content
  },
  created() {
    getSelected().then(({ data }) => {
      this.data = data
      // console.log(data)
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style lang="less" scoped>
.body {
  background: #ffecee;
}
</style>
