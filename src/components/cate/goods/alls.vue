<template>
  <div class="alls">
    <ul class="list">
      <li v-for="(g,i) in goods.alls" :key="i">
        <div class="img">
          <img :src="g.img" alt />
        </div>
        <span class="sell">{{g.sell}}</span>
        <p class="title">{{g.title}}</p>
        <p class="price">
          <b>{{g.price}}</b>
          <span>
            <i>{{g.num}}</i>
            <i class="iconfont">&#xe60c;</i>
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCate } from '@/api/index'
export default {
  name: 'alls',
  data () {
    return {
      goods: {}
    }
  },
  mounted () {
    getCate().then((data) => {
      this.goods = data.data.goods
      //   console.log(this.goods)
    })
  }
}
</script>
<style lang="less" scoped>
.alls {
  width: 100%;
  .list {
    width: 96%;
    padding: 0 2px 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      padding-top: 5 * 2px;
      padding-bottom: 5 * 2px;
      position: relative;
      .img {
        width: 100%;
        display: block;
        height: 175.5 * 2px;
        background: #eee;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .sell {
        position: absolute;
        top: 64%;
        left: 0;
        font-size: 10 * 2px;
        padding: 5 * 2px 10 * 2px;
        color: #fff;
        background: linear-gradient(to right, #000000 0%, transparent 100%);
      }
      .title {
        font-size: 14 * 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 30 * 2px;
        color: #000;
      }
      .price {
        display: flex;
        justify-content: space-between;
        padding: 0 2px 5 * 2px;
        b {
          color: #ff5777;
          font-weight: bold;
          font-size: 16 * 2px;
        }
        span {
          color: #333;
          font-size: 14 * 2px;
          line-height: 15 * 2px;
          .iconfont {
            font-size: 13 * 2px;
          }
        }
      }
    }
  }
}
</style>
