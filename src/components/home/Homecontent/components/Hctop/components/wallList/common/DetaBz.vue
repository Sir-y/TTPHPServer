<template>
  <div class="detabz" v-if="bz">
    <div class="xq">
      <span v-for="(e,i) in bz.tp" :key="i">
        <i class="iconfont">&#xe62a;</i>
        {{e}}
      </span>
      <span class="iconfont rig">&#xe624;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetaBz',
  props: ['bz']
}
</script>

<style lang="less" scoped>
.detabz {
  height: 70px;
  background: #ffffff;
  margin: 20px 0;
  line-height: 70px;
  .xq {
    padding: 0 20px;
    span {
      line-height: 70px;
      font-size: 28px;
      padding: 0 10px;
      color: #666666;
      i {
        color: #ff2255;
      }
    }
    .rig {
      font-size: 40px;
      display: block;
      float: right;
      padding: 0;
    }
  }
}
</style>
