<template>
  <div class="cmxia" v-if="isShow">
    <div class="bott">
      <div class="topp">
        <div class="imgs">
          <img :src="cmxia.imgs" alt />
        </div>
        <div class="rig">
          <p class="px1">
            <i>￥</i>
            {{cmxia.jg}}
          </p>
          <p>{{cmxia.k}}</p>
          <p>{{cmxia.xz}}</p>
        </div>
        <div class="clos" @click="closemodal">X</div>
      </div>
      <div class="clear"></div>
      <h3>颜色</h3>
      <p>
        <span v-for="(e1,i1) in cmxia.yan" :key="i1">{{e1}}</span>
      </p>
      <h3>尺码</h3>
      <p>
        <span v-for="(e2,i2) in cmxia.cm" :key="i2">{{e2}}</span>
      </p>
      <h3>数量</h3>
      <div class="numb">
        <button @click="jian">-</button>
        <span>{{num}}</span>
        <button @click="jia">+</button>
      </div>
      <div class="bottomn">
        <button>加入购物车</button>
        <button>立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Pricemodal',
  props: ['cmxia'],
  data () {
    return {
      isShow: false,
      num: 1
    }
  },
  methods: {
    closemodal () {
      this.isShow = false
    },
    showModal () {
      this.isShow = true
    },
    jia () {
      this.num++
    },
    jian () {
      if (this.num > 1) {
        this.num--
      }
    }
  }
}
</script>

<style lang="less" scoped>
.clear {
  clear: both;
}
.cmxia {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1001;
  font-size: 24px;
  left: 0;
  bottom: 0;
  .bott {
    height: 750px;
    width: 100%;
    background: #ffffff;
    position: absolute;
    bottom: 0;
    .topp {
      width: 100%;
      height: 160px;
      position: relative;
      .imgs {
        width: 160px;
        height: 240px;
        float: left;
        margin: -80px 0 0 30px;

        img {
          width: 100%;
        }
      }
      .rig {
        float: left;
        width: 500px;
        height: 160px;
        line-height: 40px;
        margin-left: 30px;

        .px1 {
          height: 80px;
          line-height: 80px;
          font-size: 60px;
          i {
            display: block;
            float: left;
            font-size: 24px;
          }
        }
      }
      .clos {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
    h3 {
      line-height: 70px;
      margin-left: 20px;
    }
    p {
      span {
        padding: 10px 30px;
        margin: 0 10px;
        border: 2px solid #bbbbbb;
        border-radius: 5px;
      }
    }
    .numb {
      margin-left: 20px;
      width: 200px;
      height: 50px;
      display: flex;
      border: 1px solid #cccccc;
      button {
        display: block;
        width: 50px;
        height: 48px;
        background: #ffffff;
        margin: 1px 0 0 1px;
        border-right: 1px solid #cccccc;
      }
      span {
        display: block;
        height: 50px;
        width: 98px;
        line-height: 50px;
        text-align: center;
      }
      button:nth-of-type(2) {
        border-right: none;
        border-left: 1px solid #cccccc;
      }
    }
    .bottomn {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 100px;
      display: flex;

      button {
        width: 50%;
        height: 100px;
        color: #ff5777;
        background-color: #ffe6e8;
        font-family: "微软雅黑";
        font-size: 28px;
      }
      button:nth-of-type(2) {
        color: #fff;

        background: linear-gradient(90deg, #ff5777, #ff468f);
      }
    }
  }
}
</style>
