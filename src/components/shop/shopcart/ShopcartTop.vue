<template>
  <div class="shopcart-top">
    <div class="neibu">
      <a class="lefa" href="javascript:void(history.back());">
        <span class="iconfont">&#xe682;</span>
      </a>
      <div class="cendiv">购物车</div>
      <div class="rigdiv">
        <span>编辑</span>
        <router-link tag="a" class="iconfont carticon" to="/Me">&#xe622;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopcartTop'
}
</script>

<style lang="less" scoped>
a {
  color: #000;
}
.shopcart-top {
  width: 100%;
  height: 50 * 2px;
  border-bottom: 1 * 2px solid #c9c7c8;
  position: fixed;
  background: #fafafa;
  .neibu {
    .lefa {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 50 * 2px;
      height: 50 * 2px;
      line-height: 50 * 2px;
      text-align: center;
    }
    .cendiv {
      width: 100%;
      text-align: center;
      font-size: 18 * 2px;
      line-height: 50 * 2px;
      color: gray;
    }
    .rigdiv {
      position: absolute;
      top: 0;
      right: 0;
      height: 50 * 2px;

      span,
      a {
        display: block;
        float: left;
        width: 40 * 2px;
        height: 50 * 2px;
        text-align: center;
        line-height: 50 * 2px;
        font-size: 15 * 2px;
        color: gray;
      }
      a {
        font-size: 15 * 2px;
        color: gray;
      }
    }
  }
}
</style>
