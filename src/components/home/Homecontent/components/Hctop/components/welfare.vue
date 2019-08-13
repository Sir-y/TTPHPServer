<template>
  <div class="welfare">
    <!-- 头部 -->
    <div class="welfaretitle" ref="welfare">
      <img :src="welfare.title1" alt />
      <img :src="welfare.title2" alt />
      <img :src="welfare.title3" alt />
      <img :src="welfare.title4" alt />
    </div>
    <!-- 更多好货 -->
    <div class="welfaremove" ref="move">
      <div class="WFMimg1">
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/190711_4bjf27ilc3e49c61l3i359iek28jc_188x102.png"
          alt
          ref="img1"
        />
      </div>
      <div class="WFMimg2">
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/190711_43lc1gi58g35ii9a6a5jd8l6jb82h_188x102.png"
          alt
          ref="img2"
        />
      </div>
      <div class="WFMimg3">
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/190711_22j0ef0k6llfkh6fea5ekk4036efe_188x102.png"
          alt
          ref="img3"
        />
      </div>
      <div>
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/190711_2l473giaf904460905150194l6e21_188x102.png"
          alt
          ref="img4"
        />
      </div>
    </div>
    <!-- 套装 -->
    <div class="Suit">百元套装</div>
    <div ref="h1">
      <!-- 最主要的百元套装-->
      <div class="suit">
        <div class="suitcontent" v-for="(suit,index) in welfare.suit" :key="index" ref="h">
          <img :src="suit.img" alt />
          <div class="suitP">{{suit.p}}</div>
          <div class="suitdiv1">
            <span class="div1span1">新人价</span>
            <p class="div1P">
              <span>¥</span>
              {{suit.span1}}
            </p>
            <i class="div1I">
              <span>￥</span>
              {{suit.span2}}
            </i>
          </div>
          <div class="suitdiv2">立即购买</div>
        </div>
      </div>
    </div>
    <!-- 人气美裙 -->
    <div class="Suit">人气美裙</div>

    <div ref="h2">
      <div class="suit">
        <div class="suitcontent" v-for="(suit,index) in welfare.skirt" :key="index">
          <img :src="suit.img" alt />
          <div class="suitP">{{suit.p}}</div>
          <div class="suitdiv1">
            <span class="div1span1">新人价</span>
            <p class="div1P">
              <span>¥</span>
              {{suit.span1}}
            </p>
            <i class="div1I">
              <span>￥</span>
              {{suit.span2}}
            </i>
          </div>
          <div class="suitdiv2">立即购买</div>
        </div>
      </div>
    </div>
    <!-- 19起T恤 -->
    <div class="Suit">19起T恤</div>

    <div ref="h3">
      <div class="suit">
        <div class="suitcontent" v-for="(suit,index) in welfare.T" :key="index">
          <img :src="suit.img" alt />
          <div class="suitP">{{suit.p}}</div>
          <div class="suitdiv1">
            <span class="div1span1">新人价</span>
            <p class="div1P">
              <span>¥</span>
              {{suit.span1}}
            </p>
            <i class="div1I">
              <span>￥</span>
              {{suit.span2}}
            </i>
          </div>
          <div class="suitdiv2">立即购买</div>
        </div>
      </div>
    </div>
    <!-- 平价裤装 -->
    <div class="Suit">平价裤装</div>
    <div ref="h4">
      <div class="suit">
        <div class="suitcontent" v-for="(suit,index) in welfare.trousers" :key="index">
          <img :src="suit.img" alt />
          <div class="suitP">{{suit.p}}</div>
          <div class="suitdiv1">
            <span class="div1span1">新人价</span>
            <p class="div1P">
              <span>¥</span>
              {{suit.span1}}
            </p>
            <i class="div1I">
              <span>￥</span>
              {{suit.span2}}
            </i>
          </div>
          <div class="suitdiv2">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getWelfare } from '@/api/index'
export default {
  name: 'welfare',
  data () {
    return {
      welfare: [],
      h: '',
      h1: '',
      h2: '',
      h3: '',
      h4: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    getWelfare().then(({ data }) => {
      this.welfare = data
    })
  },
  methods: {
    scrollToTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.h = this.$refs.welfare.offsetHeight
      this.h1 = this.h + this.$refs.h1.offsetHeight
      this.h2 = this.h1 + this.$refs.h2.offsetHeight
      this.h3 = this.h2 + this.$refs.h3.offsetHeight
      this.h4 = this.h3 + this.$refs.h4.offsetHeight
      if (scrollTop > this.h && scrollTop < this.h1) {
        this.$refs.img1.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_00k9h7ej1fb62b920dg1lf7hj0li2_188x102.png'
        this.$refs.img2.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_43lc1gi58g35ii9a6a5jd8l6jb82h_188x102.png'
        this.$refs.img3.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_22j0ef0k6llfkh6fea5ekk4036efe_188x102.png'
        this.$refs.img4.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_2l473giaf904460905150194l6e21_188x102.png'
        this.$refs.move.style.position = 'fixed'
        this.$refs.move.style.zIndex = 999
        this.$refs.move.style.top = 0
        this.$refs.move.style.top = 0 + '*2px'
      } else if (scrollTop > this.h1 && scrollTop < this.h2) {
        this.$refs.img1.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_4bjf27ilc3e49c61l3i359iek28jc_188x102.png'
        this.$refs.img2.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_701f4b3hi6kad1be1c3djb9bf1c1i_188x102.png'
        this.$refs.img3.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_22j0ef0k6llfkh6fea5ekk4036efe_188x102.png'
        this.$refs.img4.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_2l473giaf904460905150194l6e21_188x102.png'
      } else if (scrollTop > this.h2 && scrollTop < this.h3) {
        this.$refs.img1.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_4bjf27ilc3e49c61l3i359iek28jc_188x102.png'
        this.$refs.img2.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_43lc1gi58g35ii9a6a5jd8l6jb82h_188x102.png'
        this.$refs.img3.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_2blf42f5jhbe46bci1ec1ah0ka431_188x102.png'
        this.$refs.img4.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_2l473giaf904460905150194l6e21_188x102.png'
      } else if (scrollTop > this.h3) {
        this.$refs.img1.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_4bjf27ilc3e49c61l3i359iek28jc_188x102.png'
        this.$refs.img2.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_43lc1gi58g35ii9a6a5jd8l6jb82h_188x102.png'
        this.$refs.img3.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_22j0ef0k6llfkh6fea5ekk4036efe_188x102.png'
        this.$refs.img4.src = 'https://s10.mogucdn.com/mlcdn/c45406/190711_7dh0hj31h5ge9db3h9h289h61c676_188x102.png'
      } else if (scrollTop < this.h) {
        this.$refs.move.style.position = 'relative'
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>
<style lang="less" scoped>
.welfare {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999999;
  background-color: #ffd9c3;
  .welfaretitle {
    width: 100%;

    img {
      width: 100%;
    }
  }
  .welfaremove {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ffd9c3;
    div {
      width: calc(100% / 4);
      img {
        width: 100%;
      }
    }
  }
  .Suit {
    padding: 24px;
    color: #c08064;
    text-align: center;
    font-size: 25 * 2px;
    font-weight: bold;
  }
  .suit {
    padding: 0 * 2px 7.62 * 2px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .suitcontent {
      margin-bottom: 7.62 * 2px;
      width: 49%;
      background: #fff;
      border-radius: 5 * 2px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 100%;
      }
      .suitP {
        margin-top: 3 * 2px;
        margin-bottom: 4 * 2px;
        width: 90%;
        color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 11 * 2px;
        padding-left: 7.62 * 2px;
        padding-right: 7.62 * 2px;
        line-height: 18 * 2px;
      }
      .suitdiv1 {
        width: 90%;
        position: relative;
        padding-left: 7.62 * 2px;
        padding-right: 7.62 * 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .div1span1 {
          font-size: 9 * 2px;
          color: #ff4466;
          border: 1 * 2px solid #ff4466;
          line-height: 12 * 2px;
          padding: 0 * 2px 1 * 2px;
          margin-right: 3 * 2px;
        }
        .div1P {
          font-size: 13 * 2px;
        }
        .div1I {
          color: #a1a09e;
          font-size: 4 * 2px;
          text-decoration: line-through;
          display: flex;
          align-items: center;
          position: absolute;
          right: 6.7 * 2px;
        }
      }
      .suitdiv2 {
        width: 90%;
        background: #ff4466;
        color: #fff;
        text-align: center;
        border-radius: 3 * 2px;
        font-size: 13 * 2px;
        line-height: 30 * 2px;
        margin: 10 * 2px 0 * 2px;
      }
    }
  }
}
</style>
