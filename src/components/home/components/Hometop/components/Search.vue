<template>
  <div class="search-box">
    <span class="iconfont search-icon">&#xe607;</span>
    <div class="searchsmall">
      <router-link
        tag="input"
        to="/Search01"
        type="search"
        name="search"
        id="search"
        placeholder="短裤"
      ></router-link>
      <!-- <input type="search" name="search" id="search" placeholder="短裤" /> -->
    </div>
    <Search01 v-show="flag"></Search01>
  </div>
</template>

<script>
import Search01 from '@/common/Search'
export default {
  name: 'search',
  data () {
    return {
      flag: false
    }
  },
  methods: {
    sea () {
      // this.flag = !this.flag
      // console.log(1232123132)
      // let data = {
      //   cityname: true
      // }
      // this.$emit('flag', data)
    }
  },
  components: {
    Search01
  }
}
</script>

<style lang="less" scoped>
.search-box {
  position: relative;
  height: 40 * 2px;
  padding: 5 * 2px 0;
  margin: 0 15%;
  .search-icon {
    position: absolute;
    top: -1 * 2px;
    left: 11 * 2px;
    font-family: "iconfont" !important;
    font-style: normal;
    width: 15 * 2px;
    height: 100%;
    display: block;
    font-size: 17 * 2px;
    line-height: 1.3rem;
    color: #b5bec5;
  }
  .searchsmall {
    width: 100%;
    height: 35 * 2px;
    background: #e8ecf0;
    border-radius: 50 * 2px;
    #search {
      width: 70%;
      border: none;
      height: 35 * 2px;
      outline: none;
      font-size: 12 * 2px;
      padding: 5 * 2px;
      color: #b5bec5;
      display: block;
      background-color: #e8ecf0;
      margin: 0 auto;
    }
  }
}
</style>
