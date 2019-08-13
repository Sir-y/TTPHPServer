<template>
  <div class="hc1">
    <welfare></welfare>
  </div>
</template>
<script>
import welfare from '@/components/home/Homecontent/components/Hctop/components/welfare'
export default {
  name: 'HomeContent1',
  components: {
    welfare
  }
}
</script>

<style scoped lang="less">
.hc1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1000;
}
</style>
