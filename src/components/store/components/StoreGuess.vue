<template>
  <div class="store-guess">
    <h2>
      <div class="img-block">
        <img src="../../../assets/img/guess-img01.png" alt />
      </div>
    </h2>
    <div class="content">
      <ul class="flex-row">
        <router-link to="/" tag="li" v-for="(item,inx) in storeGuess" :key="inx">
          <div class="flex-column">
            <div class="img-block">
              <img :src="item.img" alt />
              <div class="pv">已售{{item.pv}}件</div>
            </div>

            <div class="pin-info">
              <p class="title">{{item.title}}</p>
              <div class="flex-row">
                <b class="price">￥{{item.price}}</b>
                <span>
                  {{item.fav}}
                  <i class="iconfont"></i>
                </span>
              </div>
              <a href class="btn-box">立即购买</a>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['storeGuess']
}
</script>
<style lang="less" scoped>
.store-guess {
  background-color: #eee;
  padding-bottom: 120px;
  h2 {
    padding: 10/2 * 2px 0;
  }
  .content {
    .flex-row {
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        margin-top: 20/2 * 2px;
        border-radius: 5/2 * 2px;
        flex: 0 0 48%;
        background-color: #fff;
        .flex-column {
          height: 100%;
        }
        .img-block {
          position: relative;
          margin-bottom: auto;
          .pv {
            position: absolute;
            bottom: 10/2 * 2px;
            height: 50/2 * 2px;
            line-height: 50/2 * 2px;
            min-width: 40%;
            max-width: 70%;
            text-align: left;
            background: url(../../../assets/img/guess-img02.png) 0 no-repeat;
            background-size: 100%;
            padding: 0 40/2 * 2px 0 20/2 * 2px;
            color: #fff;
            font-size: 20/2 * 2px;
            z-index: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .pin-info {
          height: 160/2 * 2px;
          padding: 10/2 * 2px 12/2 * 2px;
          box-sizing: border-box;
          .title {
            font-size: 24/2 * 2px;
            height: 36/2 * 2px;
            line-height: 36/2 * 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .flex-row {
            .price {
              font-size: 30/2 * 2px;
              margin-top: 4/2 * 2px;
              line-height: 38/2 * 2px;
              font-weight: 700;
            }
            span {
              font-size: 24/2 * 2px;
              line-height: 40/2 * 2px;
              padding-right: 30/2 * 2px;
              color: #666;
              background: url(../../../assets/img/guess-icon01.png) right center
                no-repeat;
              background-size: 24/2 * 2px;
            }
          }
          .btn-box {
            display: block;
            width: 100%;
            width: 100%;
            height: 50/2 * 2px;
            line-height: 50/2 * 2px;
            border-radius: 6/2 * 2px;
            font-size: 26/2 * 2px;
            text-align: center;
            margin-top: 4/2 * 2px;
            margin-bottom: 4/2 * 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            background-color: #ff5777;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
