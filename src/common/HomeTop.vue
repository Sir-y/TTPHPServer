<template>
  <div class="home-top">
    <Logo-01 to="/Logo01"></Logo-01>
    <Search @flag="flag01"></Search>
    <Classify></Classify>
  </div>
</template>

<script>
// 导入子组件
import Logo01 from '@/components/home/components/HomeTop/components/Logo01'
import Search from '@/components/home/components/HomeTop/components/Search'
import Classify from '@/components/home/components/HomeTop/components/Classify'

export default {
  name: 'HomeTop',
  data () {
    return {
      flag: false
    }
  },
  components: {
    Logo01,
    Search,
    Classify
  },
  methods: {
    flag01 (data) {
      this.flag = data.cityname
      // console.log(this.flag)
    }
  }
}
</script>

<style>
.home-top {
  width: 100%;
  height: 40 * 2px;
  background: #fff;
  position: relative;
  padding-top: 5 * 2px;
  margin-bottom: 10 * 2px;
}
</style>
