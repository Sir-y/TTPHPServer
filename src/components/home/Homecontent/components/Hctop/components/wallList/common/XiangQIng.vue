<template>
  <div class="xiqi" v-if="xq">
    <div class="topp">
      <a href="#twxq">图文详情</a>
      <a href="#spcs">商品参数</a>
      <a href="#rmtj">热卖推荐</a>
    </div>
    <div class="twxq" id="twxq">
      <div class="itop">
        <p>{{xq.tuw.title}}</p>
        <p>{{xq.tuw.title1}}</p>
      </div>
      <div class="icon">
        <p>{{xq.tuw.cz}}</p>
        <img v-for="(e1,i1) in xq.tuw.img" :key="i1" :src="e1" alt />
      </div>
    </div>

    <div class="spcs" id="spcs">
      <div class="hz" v-for="(e2,i2) in xq.tuw.shangppc.c" :key="i2">
        <span v-for="(e3,i3) in e2" :key="i3">{{e3}}</span>
      </div>
    </div>

    <div class="rmtj" id="rmtj">
      <a href="#" class="list" v-for="(e4,i4) in xq.tuw.ren" :key="i4">
        <img :src="e4.img" alt />
        <h3>{{e4.title}}</h3>
        <p>{{e4.j}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiangQing',
  props: ['xq']
}
</script>

<style lang="less" scoped>
.xiqi {
  background: #ffffff;
  margin: 20px 0;
  overflow: auto;
  padding: 0 0 50px 0;
  .topp {
    display: flex;
    border-bottom: 1px solid #bbbbbb;
    a {
      width: 33%;
      height: 99px;
      line-height: 99px;
      font-size: 30px;
      color: #333;
      text-align: center;
    }
    a:hover {
      color: #f13e3a;
      border-bottom: 1px solid #f13e3a;
    }
  }
  .twxq {
    padding: 30px 0;
    .itop {
      padding-bottom: 20px;
      p {
        padding: 30px 20px 0;
        color: #727272;
        font-size: 28px;
      }
    }
    .icon {
      p {
        padding: 0 20px;
        line-height: 50px;
        font-size: 30px;
      }
      img {
        width: 100%;
        margin: 20px 0 0 0;
      }
    }
  }
  .spcs {
    padding: 0 20px;
    .hz {
      border-bottom: 1px solid #f4f4f4;
      span {
        display: inline-block;
        line-height: 80px;
        font-size: 28px;
        width: 70px;
        text-align: left;
        color: #eb4868;
      }
      span:nth-of-type(1) {
        padding-left: 20px;
        width: 200px;
        color: #727272;
      }
    }
    .hz:nth-of-type(1) {
      span {
        color: #727272;
      }
    }
    .hz:nth-of-type(n + 6) {
      span:nth-of-type(2) {
        width: 400px;
      }
    }
  }
  .rmtj {
    margin: 30px 0 0 0;
    padding: 0 20px;
    .list {
      display: block;
      color: #727272;
      width: 32%;
      margin-right: 2%;
      float: left;
      img {
        width: 100%;
      }
      h3 {
        font-size: 25px;
        line-height: 50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        line-height: 30px;
      }
    }
    .list:nth-of-type(3n) {
      margin: 0;
    }
  }
}
</style>
