<template>
  <div class="Popular">
    <ul class="uls" v-for="(i,index) in LiveBroadcast" :key="index">
      <span class="span1">
        <img :src="i.pic" alt />
      </span>
      <span class="span2">{{i.id}}</span>
      <li class="lis">
        <img :src="i.pic2" alt />
        <div class="box">
          <span class="y"></span>
          <span class="spans2">直播中</span>
          <span class="spans3">{{i.rs}}</span>
        </div>
        <p class="p1">{{i.text}}</p>
        <div class="box2">
          <div class="boxs1">
            <img :src="i.img1" alt />
            <span class="sp1">{{i.money1}}</span>
          </div>
          <div class="boxs2">
            <img :src="i.img2" alt />
            <span class="sp2">{{i.money2}}</span>
          </div>
          <div class="boxs3">
            <img :src="i.img3" alt />
            <span class="sp3">{{i.money3}}</span>
          </div>
          <div class="boxs4">
            <div class="bb1">
              <span class="ss1">
                <img :src="i.imgs1" alt />
              </span>
              <span class="ss2">{{i.ttx1}}</span>
            </div>
            <div class="bb1">
              <span class="ss1">
                <img :src="i.imgs2" alt />
              </span>
              <span class="ss2">{{i.ttx2}}</span>
            </div>
            <div class="bb1">
              <span class="ss1">
                <img :src="i.imgs3" alt />
              </span>
              <span class="ss2">{{i.ttx3}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Popular',
  props: ['LiveBroadcast'],
  data() {
    return {
      msg: 'Popular'
    }
  }
}
</script>

<style lang="less" scoped>
.Popular {
  margin-top: 95 * 2px;
}
.uls {
  width: 351 * 2px;
  height: 242 * 2px;
  margin: 0 auto;
  position: relative;
}
.uls .span1 {
  display: inline-block;
  width: 47 * 2px;
  height: 47 * 2px;
  border: 2 * 2px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 5 * 2px;
  left: 10 * 2px;
  z-index: 99;
  overflow: hidden;
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
.uls .span2 {
  position: absolute;
  left: 70 * 2px;
  top: 18 * 2px;
  font-size: 16 * 2px;
}
.uls .lis {
  width: 351 * 2px;
  height: 200 * 2px;
  position: absolute;
  bottom: 0;
  img {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
}
.uls .lis .box {
  position: absolute;
  top: 70 * 2px;
  left: 10 * 2px;
  width: 96 * 2px;
  height: 19 * 2px;
}
.uls .lis .box .y {
  display: inline-block;
  width: 10 * 2px;
  height: 10 * 2px;
  border-radius: 50%;
  background: red;
  line-height: 19 * 2px;
  margin-left: 6 * 2px;
}
.uls .lis .box .spans2 {
  display: inline-block;
  font-size: 12 * 2px;
  line-height: 19 * 2px;
  border-right: 1 * 2px solid #ffffff;
  color: #fff;
}
.uls .lis .box .spans3 {
  display: inline-block;
  font-size: 12 * 2px;
  line-height: 19 * 2px;
  color: #ffffff;
}
.uls .lis .p1 {
  position: absolute;
  position: absolute;
  top: 100 * 2px;
  left: 8 * 2px;
  font-size: 16 * 2px;
  color: #ffffff;
}
.lis .box2 {
  width: 100%;
  height: 60 * 2px;
  position: absolute;
  bottom: 10 * 2px;
}
.lis .box2 .boxs1 {
  display: inline-block;
  width: 60 * 2px;
  height: 60 * 2px;
  margin-left: 8 * 2px;
  position: absolute;
}
.lis .box2 .boxs2 {
  display: inline-block;
  width: 60 * 2px;
  height: 60 * 2px;
  margin-left: 8 * 2px;
  position: absolute;
  left: 68 * 2px;
}
.lis .box2 .boxs3 {
  display: inline-block;
  width: 60 * 2px;
  height: 60 * 2px;
  margin-left: 8 * 2px;
  position: absolute;
  left: 136 * 2px;
}
.lis .box2 .boxs4 {
  display: inline-block;
  width: 110 * 2px;
  height: 60 * 2px;
  position: absolute;
  right: 10 * 2px;
  .bb1 {
    width: 100%;
    height: 20 * 2px;
    line-height: 20 * 2px;
    .ss1 {
      display: inline-block;
      width: 18 * 2px;
      height: 18 * 2px;
      border-radius: 50%;
      position: absolute;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
        z-index: 999;
      }
    }
    .ss2 {
      position: absolute;
      left: 20 * 2px;
    }
  }
}
.lis .box2 .boxs1 .sp1,
.lis .box2 .boxs2 .sp2,
.lis .box2 .boxs3 .sp3 {
  height: 14 * 2px;
  font-size: 12 * 2px;
  color: #fff;
  position: absolute;
  bottom: 3 * 2px;
  left: 5 * 2px;
}
</style>
