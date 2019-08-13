<template>
  <div class="Dress">
    <div class="box" v-for="(l,index) in data.Matching" :key="index">
      <div class="myl">
        <img :src="l.pic" alt />
      </div>
      <div class="myr">
        <p class="p1">{{l.p1}}</p>
        <p class="p2">
          <span class="span1">{{l.p2}}</span>
          <span class="span2">
            <i class="iconfont i1">&#xe608;</i>
            <i class="iconfont i2">&#xe608;</i>
            <i class="iconfont i3">&#xe608;</i>
            <i class="iconfont i4">&#xe608;</i>
            <i class="iconfont i5">&#xe608;</i>
          </span>
        </p>
        <p class="p3">
          <span class="sp1">{{l.span1}}</span>
          <span class="sp2">{{l.span2}}</span>
          <span class="sp3">{{l.span3}}</span>
        </p>
        <div class="bbxx">{{l.box}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dress',
  props: ['data'],
  data () {
    return {
      msg: 'Dress'
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 718px;
  height: 328px;
  border: 1px solid #eeeeee;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  .myl {
    width: 220px;
    height: 328px;
    display: inline-block;
    position: absolute;
    left: 0;
    img {
      width: 100%;
    }
  }
  .myr {
    width: 480px;
    height: 290px;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 20px;
    .p1 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 32px;
    }
    .p2 {
      margin-top: 20px;
      .span1 {
        font-size: 26px;
        color: rgb(255, 69, 161);
      }
      .span2 {
        width: 32px;
        height: 26px;
        i {
          margin-top: 14px;
          font-size: 40px;
          color: rgb(255, 69, 161);
        }
        .i1 {
          position: absolute;
          top: 32px;
        }
        .i2 {
          position: absolute;
          top: 32px;
          left: 170px;
        }
        .i3 {
          position: absolute;
          top: 32px;
          left: 210px;
        }
        .i4 {
          position: absolute;
          top: 32px;
          left: 250px;
        }
        .i5 {
          position: absolute;
          top: 32px;
          left: 290px;
        }
      }
    }
    .p3 {
      height: 54px;
      margin-top: 90px;
      .sp1 {
       width: 74px;
        height: 30px;
        display: inline-block;
        border: 1px solid rgb(255, 69, 161);
        font-size: 22px;
        text-align:center;
        line-height:30px;
        color:rgb(255, 69, 161);
        margin-top: 10px;
      }
      .sp2 {
        font-size: 36px;
        margin-left: 10px;
        // font-weight: bold;
      }
      .sp3 {
        font-size: 24px;
        color: #888;
        text-decoration: line-through; //文字中间带线
        margin-left: 20px;
      }
    }
    .bbxx {
      width: 172px;
      height: 56px;
      background: rgb(255, 87, 119);
      line-height: 56px;
      text-align: center;
      margin-top: 10px;
      color: #ffffff;
      font-size: 28px;
      border-radius: 10px;
    }
  }
}
</style>
