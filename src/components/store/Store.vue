<template>
  <div class="store">
    <!-- <HomeTop></HomeTop> -->
    <StoreTop />
    <StoreList :storeList="list" />
    <StoreGuess :storeGuess="guess" />
  </div>
</template>

<script>
// 导入子组件
// import HomeTop from '@/common/HomeTop'

import StoreTop from './components/StoreTop'
import StoreList from './components/StoreList'
import StoreGuess from './components/StoreGuess'
import { getStore, getStoreList } from '@/api/index'

export default {
  name: 'Store',
  data () {
    return {
      msg: 'store',
      // top: [],
      list: [],
      guess: []
    }
  },
  components: {
    StoreTop,
    StoreList,
    StoreGuess,

    getStore,
    getStoreList

    // HomeTop
  },
  created () {
    getStore().then(({ data }) => {
      // this.top = data.data.top
      this.list = data.data.list
      this.guess = data.data.guess
      // console.log(data.data)
    })
    getStoreList().then(({ data }) => {
      // this.top = data.data.top

      // console.log(data.data)
    })
  }
}
</script>

<style lang="less">
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.img-block {
  display: block;
}
.img-block img {
  display: block;
  height: 100%;
  width: 100%;
}
// .content {
//   // margin: 0 18/2 * 2px;
// }
</style>
