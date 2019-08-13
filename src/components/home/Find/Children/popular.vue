<template>
  <div class="popular">
    <div class="popularcore" v-for="(pop,index) in populardata" :key="index">
      <!-- 左边 -->
      <div class="Populeft">
        <img :src="pop.leftImg" alt />
        <div class="Poputitle">{{pop.leftTitle}}</div>
        <span class="PopuLine"></span>
        <span class="Popuspan1">{{pop.number}}</span>
        <div class="Popbottom">
          <p class="PopuP">{{pop.leftP1}}</p>
          <span class="Popuspan2">{{pop.leftSpan}}</span>
          <p class="PopuP">{{pop.leftP2}}</p>
        </div>
      </div>
      <!-- 右边 -->
      <div class="Popucore">
        <img :src="pop.rightImg1" alt />
        <i class="iconfont licorei1">&#xe608;</i>
        <!-- <i class="iconfont licorei1">&#xe617;</i> -->
        <span class="Popuspan3">{{pop.Img1}}</span>
      </div>
      <!--右边-->
      <div class="Popucore">
        <img :src="pop.rightImg2" alt />
        <i class="iconfont licorei1">&#xe608;</i>
        <span class="Popuspan3">{{pop.Img2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getFind } from '@/api/index'
export default {
  name: 'popular',
  data () {
    return {
      populardata: []
    }
  },
  mounted () {
    getFind().then(({ data }) => {
      this.populardata = data.popular
    })
  }
}
</script>

<style lang="less" scoped>
.popular {
  padding: 7.68 * 2px;
  background: #f6f6f6;
  .popularcore {
    padding: 7.68 * 2px;
    border-radius: 4 * 2px;
    background: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8 * 2px;
    .Populeft {
      width: 33%;
      padding-top: 12 * 2px;
      padding-bottom: 12 * 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 60%;
      }
      .Poputitle {
        margin-top: 3%;
        color: #333;
        text-align: center;
        line-height: 18 * 2px;
        font-weight: 700;
        font-size: 13 * 2px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .PopuLine {
        margin-top: 15%;
        margin-bottom: 15%;
        width: 15%;
        height: 1 * 2px;
        background: rgba(0, 0, 0, 0.1);
      }
      .Popuspan1 {
        color: #666;
        font-weight: 700;
        font-size: 4 * 2px;
      }
      .Popbottom {
        margin-top: 5%;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .PopuP {
        color: #999;
        font-size: 4 * 2px;
      }
      .Popuspan2 {
        color: #666;
        font-weight: 700;
        font-size: 4 * 2px;
      }
    }
    .Popucore {
      width: 32%;
      height: 5rem;
      position: relative;
      border-radius: 5 * 2px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .licorei1 {
        color: red;
        font-size: 14 * 2px;
        top: 7 * 2px;
        right: 7 * 2px;
        position: absolute;
      }
      .Popuspan3 {
        display: block;
        position: absolute;
        left: 7 * 2px;
        bottom: 7 * 2px;
        font-size: 10 * 2px;
        color: #fff;
      }
    }
  }
}
</style>
