<template>
  <div class="soles">
    <ul class="list">
      <li v-for="(g,i) in goods.soles" :key="i">
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
  name: 'soles',
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
.soles {
  width: 100%;
  .list {
    width: 96%;
    padding: 0 * 2px 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      padding-top: 10 * 2px;
      padding-bottom: 10 * 2px;
      position: relative;
      .img {
        width: 100%;
        display: block;
        height: 355 * 2px;
        background: #eee;
        img {
          width: 100%;
        }
      }
      .sell {
        position: absolute;
        top: 64%;
        left: 0;
        font-size: 20 * 2px;
        padding: 10 * 2px 20 * 2px;
        color: #fff;
        background: linear-gradient(to right, #000000 0%, transparent 100%);
      }
      .title {
        font-size: 28 * 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 60 * 2px;
        color: #000;
      }
      .price {
        display: flex;
        justify-content: space-between;
        padding: 0 * 2px 10 * 2px;
        b {
          color: #ff5777;
          font-weight: bold;
          font-size: 32 * 2px;
        }
        span {
          color: #333;
          font-size: 26 * 2px;
          line-height: 30 * 2px;
          .iconfont {
            font-size: 26 * 2px;
          }
        }
      }
    }
  }
}
</style>
