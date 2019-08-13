<template>
  <div class="searchbox">
    <i class="iconfont search-icon01">&#xe607;</i>
    <input type="search" name="search" class="btn" :placeholder="searchVal" />
    <i class="iconfont search-icon02">&#xe61d;</i>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: ['np'],
  computed: {
    searchVal () {
      return this.$store.state.searchValue
    }
  },
  watch: {
    np (v) {
      // console.log(v)
    }
  }
}
</script>

<style scoped lang="less">
.searchbox {
  position: relative;
  border-radius: 1 * 2px;
  width: 100%;
  height: 30 * 2px;
  line-height: 30 * 2px;
  top: 7 * 2px;
  border: 1 * 2px solid #f3f3f3;
  background: #ececec;
  text-align: left;
  float: left;
  .search-icon01 {
    margin-left: 5 * 2px;
    color: rgb(196, 196, 196);
    font-size: 17 * 2px;
  }
  .btn {
    width: 80%;
    height: 100%;
    background: #ececec;
    margin-top: -5 * 2px;
    color: #000;
  }
  .search-icon02 {
    font-size: 20 * 2px;
    color: gray;
  }
}
</style>
