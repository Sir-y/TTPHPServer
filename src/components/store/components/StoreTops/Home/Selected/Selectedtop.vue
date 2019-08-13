<template>
  <div class="Selectedtop">
    <div>
      <img :src="data.title" alt />
    </div>
    <div class="box">
      <p class="p1">好货精选</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selectedtop',
  props: ['data'],
  data () {
    return {
      msg: 'Selectedtop'
    }
  }
}
</script>

<style lang="less" scoped>
.Selectedtop {
  img {
    width: 100%;
  }
  .box {
    width: 100%;
    height: 70px;
    background: #ffecee;
    padding-top: 30px;
    .p1 {
      text-align: center;
      height: 48px;
      font-size: 44px;
      color: #ffa2b0;
      font-weight: bold;
    }
  }
}
</style>
