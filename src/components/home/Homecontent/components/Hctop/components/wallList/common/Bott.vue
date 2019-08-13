<template>
  <div class="bott">
    <div class="lef">
      <a href="#">
        <p class="iconfont">&#xe623;</p>
        <p>商铺</p>
      </a>
      <a href="#">
        <p class="iconfont">&#xe623;</p>
        <p>客服</p>
      </a>
      <a href="#">
        <p class="iconfont">&#xe623;</p>
        <p>收藏</p>
      </a>
    </div>
    <div class="rig">
      <a href="#" @click="mk()">加入购物车</a>
      <a href="#" @click="mk()">立即购买</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bott',
  data () {
    return {
      data: '123'
    }
  },
  methods: {
    mk () {
      // console.log(this.$refs.modal)
      this.$emit('lis', this.data)
      // this.$refs.modal.showModal()
    }
  }
}
</script>
<style lang="less" scoped>
.bott {
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  display: flex;
  z-index: 1000;
  .lef {
    width: 48%;
    display: flex;
    a {
      display: block;
      width: calc(100% / 3);
      color: #666;
      border-right: 1px solid #ededed;
      p {
        line-height: 40px;
        text-align: center;
        font-size: 28px;
      }
      p:nth-of-type(1) {
        line-height: 60px;
        font-size: 40px;
      }
    }
    a:nth-of-type(2) {
      color: #ff5777;
    }
    a:nth-of-type(3) {
      border: none;
    }
  }
  .rig {
    width: 52%;
    display: flex;
    a {
      display: block;
      width: 50%;
      line-height: 100px;
      text-align: center;
      font-size: 28px;
      color: #ff5777;
      background-color: #ffe6e8;
    }
    a:nth-of-type(2) {
      color: #fff;
      background: linear-gradient(90deg, #ff5777, #ff468f);
    }
  }
}
</style>
