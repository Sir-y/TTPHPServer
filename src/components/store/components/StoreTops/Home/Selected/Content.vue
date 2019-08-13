<template>
  <div class="content">
    <div class="box" v-for="(l,index) in data.data" :key="index">
      <div class="box2">
        <img :src="l.pic" alt />
        <div class="box3">{{l.p}}</div>
      </div>
      <p class="p1">{{l.text}}</p>
      <div class="box4">
        <span class="span1">{{l.span1}}</span>
        <span class="span2">{{l.span2}}</span>
        <span class="span3">{{l.span3}}</span>
      </div>
      <div class="box5">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  props: ['data'],
  data () {
    return {
      msg: 'content'
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  // padding: 0 16px;
  width: 100%;
  background: #ffecee;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .box {
    margin-top: 10px;
    width: 350px;
    height: 646px;
    background: #ffffff;
    .box2 {
      width: 330px;
      height: 430px;
      background: red;
      margin: auto;
      margin-top: 10px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }
      .box3 {
        width: 142px;
        height: 40px;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 40px;
        font-size: 24px;
        color: #ffffff;
        position: absolute;
        right: 0;
        bottom: 30px;
      }
    }
    .p1 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 32px;
      margin-top: 10px;
      margin-left: 10px;
      color: #666;
    }
    .box4 {
      margin-top: 15px;
      margin-left: 10px;
      .span1 {
        display: inline-block;
        width: 78px;
        height: 34px;
        border-radius: 10px;
        border: 1px solid #ff5777;
        font-size: 22px;
        color: #f00000;
        line-height: 34px;
        text-align: center;
      }
      .span2 {
        font-size: 34px;
        color: #555555;
        margin-left: 10px;
      }
      .span3 {
        font-size: 28px;
        color: #a1a09e;
        text-decoration: line-through; //文字中间带线
      }
    }
    .box5 {
      width: 310px;
      height: 64px;
      margin: auto;
      margin-top: 30px;
      background: #ff5777;
      text-align: center;
      line-height: 64px;
      font-size: 30px;
      color: #ffffff;
      border-radius: 10px;
    }
  }
}
</style>
