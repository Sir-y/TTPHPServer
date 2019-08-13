<template>
  <div class="look-operate">
    <div class="left">
      <span class="iconfont">&#xe6b1;</span>
    </div>
    <div class="right">
      <div>
        <span class="iconfont">&#xe622;</span>
        <i>{{l.msgnum}}</i>
      </div>
      <div>
        <span class="iconfont">&#xe617;</span>
        <i>{{l.sticknum}}</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lookoperate',
  props: ['l']
}
</script>
<style lang="less" scoped>
.look-operate {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left {
    width: 15%;
    span {
      font-size: 60px;
    }
  }
  .right {
    width: 30%;
    display: flex;
    justify-content: space-between;
    div {
      width: 50%;
      span {
        font-size: 50px;
      }
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
