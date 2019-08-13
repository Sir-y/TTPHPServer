<template>
  <div class="cate">
    <catetop></catetop>
    <div class="scroll">
      <div class="left" ref="left">
        <ul>
          <li
            :class="{active: active == i+1}"
            @click="getRightData(n.id)"
            v-for="(n,i) in catename"
            :key="i"
          >{{n.title}}</li>
        </ul>
      </div>
      <div class="right" ref="right">
        <div class="box">
          <ul class="list">
            <li class="icon" v-for="(d,i) in right" :key="i">
              <div class="img">
                <img :src="d.img" alt />
              </div>
              <span>{{d.title}}</span>
            </li>
          </ul>
          <div class="goods">
            <router-link tag="span" to="/cate/alls">综合</router-link>
            <router-link tag="span" to="/cate/soles">销量</router-link>
            <router-link tag="span" to="/cate/news">新品</router-link>
          </div>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCate } from '@/api/index'
import BScroll from '@better-scroll/core'
import Catetop from '@/components/cate/Catetop'
export default {
  name: 'cate',
  data () {
    return {
      catename: [],
      rights: [
      ],
      right: {},
      active: 0
    }
  },
  components: {
    Catetop
  },
  mounted () {
    /* eslint-disable */
    getCate().then((data) => {
      this.catename = data.data.name
      this.rights = data.data.data
      var h = window.screen.availHeight - 42 + '*2px'
      this.$refs.left.style.height = h
      this.$refs.right.style.height = h
      this.getRightData(1)
      this.$nextTick(() => {
        /* eslint-disable */
        new BScroll('.left', { click: true })
        new BScroll('.right', { click: true })
      })
    })
    // 设置两个滚动盒子的外容器的高度

  },
  methods: {
    getRightData(id) {
      this.right = this.rights.filter(e => {
        return e.id === id
      })[0].sort
      this.active = id
    }
  }
}
</script>
<style lang="less" scoped>
.cate {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  border-top: 2 * 2px solid #eee;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  .scroll {
    margin-top: 60 * 2px;
    display: flex;
    height: calc(100% - 120px);
    .left {
      width: 25%;
      li {
        height: 45 * 2px;
        line-height: 45 * 2px;
        text-align: center;
        background: #f5f5f5;
        color: #666;
        font-size: 13 * 2px;
      }
      li:nth-child(1):active {
        background: #fff;
        color: #ff5577;
        font-weight: bold;
        position: relative;
      }
      .active {
        background: #fff;
        color: #ff5577;
        font-weight: bold;
        position: relative;
      }
      .active::before {
        content: "";
        display: inline-block;
        width: 5 * 2px;
        height: 15 * 2px;
        background: #ff5577;
        position: absolute;
        top: 14 * 2px;
        left: 0;
      }
    }
    .right {
      width: 75%;
      .box {
        .list {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .icon {
            width: calc(100% / 3);
            text-align: center;
            margin-top: 40px;
            span {
              width: 100%;
              font-size: 24px;
              color: #333;
              line-height: 80px;
            }
            .img {
              width: 100%;
              img {
                width: 80%;
              }
            }
          }
        }
        .goods {
          width: 100%;
          display: flex;
          flex-direction: row;
          border-bottom: 1 * 2px solid #ccc;
          padding-bottom: 10 * 2px;
          margin-top: 25 * 2px;
          color: #000;
          span {
            display: block;
            width: calc(100% / 3);
            text-align: center;
            font-size: 14 * 2px;
            border-left: 1 * 2px solid #ccc;
          }
        }
        .router-link-exact-active,
        .router-link-active {
          color: #ff5577;
        }
      }
    }
  }
}
</style>
