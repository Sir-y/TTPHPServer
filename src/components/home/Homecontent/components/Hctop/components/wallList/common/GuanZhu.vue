<template>
  <div class="guanz">
    <div class="topp">
      <div class="lef">
        <img :src="gz.dz.img" alt />
        <p>
          {{gz.dz.p}}
          <span>
            <i v-for="(v,i) in gz.dz.xx" :key="i" class="iconfont iconstar">&#xe629;</i>
          </span>
        </p>
      </div>
      <a href="#" class="rig">进店></a>
    </div>
    <div class="clear"></div>
    <div class="bott">
      <div class="lp1">
        <p v-for=" (e1,i1) in  gz.xl.zxl" :key="i1">{{e1}}</p>
      </div>
      <div class="lp1">
        <p v-for=" (e2,i2) in  gz.xl.sz" :key="i2">{{e2}}</p>
      </div>
      <div class="lp2">
        <p>
          <span v-for=" (e3,i3) in  gz.xl.ms" :key="i3">{{e3}}</span>
        </p>
        <p>
          <span v-for=" (e4,i4) in  gz.xl.zl" :key="i4">{{e4}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuanZhu',
  props: ['gz']
}
</script>

<style lang="less" scoped>
.clear {
  clear: both;
}
.guanz {
  overflow: auto;
  background: #ffffff;
  padding: 40px 20px;
  .topp {
    .lef {
      float: left;
      .iconstar {
        color: orangered;
        margin-right: 5 * 2px;
        font-size: 14 * 2px;
      }
      img {
        display: block;
        width: 96px;
        height: 96px;
        float: left;
      }
      p {
        float: left;
        line-height: 48px;
        padding: 0 20px;
        font-size: 30px;
        span {
          display: block;
        }
      }
    }
    .rig {
      width: 120px;
      height: 60px;
      float: right;
      color: #ff5777;
      font-size: 30px;
      border: 1px solid #ff5777;
      text-align: center;
      line-height: 60px;
    }
  }
  .bott {
    display: flex;
    padding: 30px 0 20px 0;
    .lp1 {
      width: 33%;
      text-align: center;
      border-right: 1px solid #bbbbbb;
      p:nth-of-type(1) {
        font-size: 36px;
        color: #333333;
        padding: 10px 0;
      }
      p:nth-of-type(2) {
        font-size: 22px;
        color: #999999;
      }
    }
    .lp2 {
      width: 33%;
      text-align: center;
      p {
        line-height: 45px;
        font-size: 24px;
        color: #999999;
        span:nth-of-type(2) {
          margin-left: 8px;
          color: #00cc00;
        }
      }
    }
  }
}
</style>
