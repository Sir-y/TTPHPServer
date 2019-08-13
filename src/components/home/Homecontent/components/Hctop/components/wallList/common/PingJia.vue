<template>
  <div class="pinji">
    <div class="topp">
      <span v-for="(e1,i1) in pj.m" :key="i1">{{e1}}</span>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="centt">
      <span v-for="(e2,i2) in pj.span" :key="i2">{{e2}}</span>
    </div>
    <div class="list" v-for="(e3,i3) in pj.user" :key="i3">
      <div class="ptop">
        <div class="img1">
          <img :src="e3.im" alt />
        </div>
        <span>{{e3.name}}</span>
      </div>
      <p class="pj1" v-for="(v,k) in e3.title" :key="k">{{ v}}</p>
      <div class="yht">
        <a href="#" v-for="(e4,i4) in e3.im1" :key="i4">
          <img :src="e4" alt />
        </a>
      </div>
      <div class="mm">
        <span class="time1" v-for="(m,k0) in e3.span" :key="k0">{{m}}</span>
      </div>
      <p class="sjhf">{{e3.p}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PingJia',
  props: ['pj']
}
</script>

<style lang="less" scoped>
.pinji {
  background: #ffffff;
  margin: 20px 0;
  padding: 10px 20px;
  .topp {
    padding: 10px 0;
    color: #999999;
    span {
      padding: 2px 10px;
    }
    span:nth-of-type(2) {
      border-left: 1px solid #bbbbbb;
    }
    i {
      float: right;
      font-size: 40px;
    }
  }
  .centt {
    width: 100%;
    overflow: auto;
    span {
      display: inline-block;
      padding: 0 12px;
      height: 48px;
      line-height: 48px;
      color: #ff2255;
      background-color: #ffe8ee;
      margin: 10px 10px 0 0;
    }
  }
  .list {
    width: 100%;
    overflow: auto;
    padding: 20px 0;
    .ptop {
      width: 100%;
      overflow: auto;
      .img1 {
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    span {
      float: left;
      line-height: 60px;
      margin-left: 30px;
      font-size: 30px;
    }
    .mm {
      width: 100%;
      height: 0.8rem;
      position: relative;
      margin-bottom: 10px;
      span:nth-of-type(1) {
        margin-left: 0;
      }
      span:nth-of-type(2) {
        display: block;
        position: absolute;
        right: 0;
        border: 3px solid #ffe8ee;
        padding: 0 0.2rem;
        border-radius: 45px;
      }
    }
  }
  .pj1 {
    color: #727272;
    font-size: 35px;
    padding: 30px 0 0 0;
  }
  .time1 {
    color: #999;
  }
  .yht {
    padding: 30px 0;
    display: flex;
    a {
      display: block;
      margin: 0 10px 10px 0;
      img {
        width: 140px;
        height: 140px;
      }
    }
  }
  .sjhf {
    border-top: 1px solid #bbbbbb;
    color: #999999;
    font-size: 28px;
    padding: 30px 0 0 0;
    line-height: 32px;
  }
}
</style>
