<template>
  <div class="page1">
    <HC1-top></HC1-top>
    <!-- 围墙导航部分 -->
    <WallNavi01></WallNavi01>
    <WallPrice></WallPrice>
    <item01 :look="page1"></item01>
    <!-- <div class="home-welook" ref="page">
      <div>
        <a href="#" v-for="(v,i) in page1" :key="i" >
          <img :src="v.img" alt />
          <div class="home-p">
            <span class="home-title" v-if="v.title">{{ v.title }}</span>
            <span class="home-title1">{{v.title1}}</span>
          </div>
          <div class="home-span">
            <span v-for="(m,i) in v.money" :key="i">{{ m }}</span>
            <i class="iconfont">&#xe60c;</i>
          </div>
        </a>
      </div>
    </div>-->
  </div>
</template>

<script>
import Item01 from '@/components/home/Homecontent/components/Hctop/components/wallList/Item01'
import { getStoreList } from '@/api/index'
import BScroll from 'better-scroll'
// 导入子组件
import HC1Top from '@/common/HC1Top'
import WallNavi01 from '@/common/WallNavi01'
import WallPrice from '@/components/home/Homecontent/components/Hctop/components/WallPrice'
export default {
  name: 'WeLook',
  props: ['look'],
  data () {
    return {
      page1: []
      // fullHeight: window.screen.availHeight,
      // h1: null
    }
  },
  components: {
    getStoreList,
    HC1Top,
    WallNavi01,
    WallPrice,
    Item01
  },

  mounted () {
    /* eslint-disable */
    // this.h1 = this.fullHeight - 86 + "*2px";
    new BScroll('.home-welook', {
      scrollY: true,
      // 初始距离
      startY: 0,
      click: true
    })
    // this.$refs.page.style.height = this.h1;
  },
  created() {
    getStoreList().then(({ data }) => {
      for (let i = 0; i < data.length; i++) {
        if ((data[i].proId) === parseInt(this.$route.query.goods)) {
          this.page1 = data[i].data
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
.page1 {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 999999;
  background: #dddddd;
}
.home-welook {
  width: 100%;
  height: calc(100% - 86 * 2px);
  overflow: hidden;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  a {
    background: white;
    display: block;
    width: calc(94% / 2);
    margin-top: 2%;
    margin-left: 2%;
    border-radius: 5 * 2px;
    img {
      width: 100%;
      border-radius: 5 * 2px 5 * 2px 0 0;
    }
    .home-p {
      margin-top: 0.1rem;
      display: inline-block;
      padding: 0 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      .home-title {
        background: red;
        line-height: 0.4rem;
        margin-right: 0.1rem;
        padding: 0 0.1rem;
        color: white;
      }
      .home-title1 {
        color: black;
        line-height: 0.4rem;
      }
    }
    .home-span {
      margin-top: 5 * 2px;
      margin-bottom: 5 * 2px;
      width: 100%;
      display: inline-block;
      position: relative;
      padding: 0 0.1rem;
      span:nth-of-type(1) {
        font-size: 0.4rem;

        display: inline-block;
        color: red;
        font-weight: bold;
      }
      span:nth-of-type(2) {
        font-size: 0.3rem;
        color: #999;
        position: absolute;
        display: inline-block;
        right: 25%;
        bottom: 0;
      }
      i {
        position: absolute;
        right: 13%;
        bottom: 0;
      }
    }
  }
}
</style>
