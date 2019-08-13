<template>
  <div class="detaxq" v-if="xqp">
    <div class="topp">
      <i>￥</i>
      <b>{{xqp.j}}</b>
      <div class="rig">
        <span>{{xqp.p}}</span>
        <span>{{xqp.qg}}</span>
      </div>
    </div>
    <p class="p1">{{xqp.title}}</p>
    <p class="p2">{{xqp.yf}}</p>
  </div>
</template>

<script>

export default {
  name: 'DetaXq',
  props: ['xqp']
}
</script>

<style lang="less" scoped>
.detaxq {
  padding: 0 32px;
  background: #ffffff;
  .topp {
    height: 100px;
    font-size: 24px;
    i {
      display: block;
      float: left;
      line-height: 40px;
    }
    b {
      font-size: 80px;
      float: left;
      padding-right: 6px;
    }
    .rig {
      overflow: auto;
      float: left;
      span:nth-of-type(1) {
        display: block;
        text-decoration: line-through;
        color: #999;
        line-height: 60px;
      }
      span:nth-of-type(2) {
        display: block;
        padding: 0 10px;
        line-height: 32px;
        background-color: rgb(255, 232, 238);
        color: rgb(255, 34, 85);
      }
    }
  }
  .p1 {
    font-size: 32px;
  }
  .p2 {
    font-size: 24px;
    line-height: 68px;
  }
}
</style>
