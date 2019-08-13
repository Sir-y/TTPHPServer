<template>
  <div class="store-top">
    <div class="content">
      <ul class="flex-row">
        <!-- "to": ""

              "bgimg": "https://s10.mogucdn.com/mlcdn/c45406/190329_11f33eb6dj9a70g2hk3lij2j13lac_166x166.jpg",
        "title": "限时快抢",
              {
        "bgimg": "",
        "title": "热销榜单",
        "to": ""
      },
      {
        "bgimg": "",
        "title": "好货精选",
        "to": ""
      },
      {
        "bgimg": "",
        "title": "快时尚",
        "to": ""
        }-->
        <router-link tag="li" to="/">
          <div class="img-block">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190329_11f33eb6dj9a70g2hk3lij2j13lac_166x166.jpg"
              alt
            />
          </div>
          <div class="time" v-show="storeTop.first">
            <div class="img-block">
              <img :src="storeTop.first" alt />
            </div>
            <div class="countdown" ref="h2">
              <div class="con">
                <div class="flex-row">
                  <span>{{count.hour}}</span>
                  <b>:</b>
                  <span>{{count.min}}</span>
                  <b>:</b>
                  <span class="second">{{count.second}}</span>
                </div>
              </div>
            </div>
          </div>
          <p class="title">限时抢购</p>
        </router-link>
        <router-link tag="li" to="/ShoppingMall">
          <div class="img-block">
            <img :src="storeTop.bangImg" alt />
          </div>

          <p class="title">热销榜单</p>
        </router-link>
        <router-link tag="li" to="/SuperGoods">
          <div class="img-block">
            <img :src="storeTop.supergoodImg" alt />
          </div>

          <p class="title">好货精选</p>
        </router-link>
        <router-link tag="li" to="/">
          <div class="img-block">
            <img :src="storeTop.kssImg" alt />
          </div>

          <p class="title">快时尚</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { getStore } from '@/api/index'

export default {
  data () {
    return {
      count: {},
      countTime: '',
      storeTop: {}
    }
  },
  // props: ['storeTop'],
  components: {
    getStore
  },
  created () {
    getStore().then(({ data }) => {
      this.storeTop = data.data.top
      this.countTime = this.storeTop.time

      // console.log(data.data)
    })
  },
  methods: {
    num (s) {
      return s < 10 ? '0' + s : s
    }
  },
  watch: {
    countTime (to, from) {
      // console.log(to)
      setInterval(() => {
        let countdown = to - new Date()
        let totalHours = countdown / 1000 / 60 / 60
        let totalMins = totalHours % 1 * 60
        let totalSeconds = totalMins % 1 * 60
        this.count = {
          hour: this.num(Math.floor(totalHours)),
          min: this.num(Math.floor(totalMins)),
          second: this.num(Math.floor(totalSeconds))
        }
      }, 1000)
    }
  }

}
</script>
<style lang="less" scoped>
.store-top {
  background-color: #fff;
  padding: 10/2 * 2px 0;
  .content {
    .flex-row {
      justify-content: space-between;
      li {
        flex: 0 0 23%;
        position: relative;
        .time {
          height: 100%;
          position: absolute;
          top: 0;
          .countdown {
            .flex-row {
              justify-content: center;
              span {
                text-align: center;
                height: 32/2 * 2px;
                background-color: #000;
                color: #fff;
                font-size: 20/2 * 2px;
                width: 32/2 * 2px;
                line-height: 32/2 * 2px;
              }
              b {
                font-size: 32/2 * 2px;
              }
            }
            position: absolute;
            bottom: 40/2 * 2px;
            width: 100%;
          }
          .img-block {
            margin: 0 auto;
            width: 75%;
          }
        }
        .title {
          font-weight: bold;
          width: 100%;
          position: absolute;
          bottom: 5/2 * 2px;
          text-align: center;
          color: #fff;
          font-size: 28/2 * 2px;
        }
      }
    }
  }
}
</style>
