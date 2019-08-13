<template>
  <div class="home-welook">
    <div>
      <router-link href="#" v-for="(v,i) in look" :key="i" :to="{name:'Detail',query:{num:v.id}}">
        <img :src="v.img" alt />
        <div class="home-p">
          <span class="home-title" v-if="v.title">{{ v.title }}</span>
          <span class="home-title1">{{v.title1}}</span>
        </div>
        <div class="home-span">
          <span v-for="(m,i) in v.money" :key="i">{{ m }}</span>
          <i class="iconfont">&#xe60c;</i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { homecontent, getStoreNew, getStoreSales } from '@/api'
import BScroll from '@better-scroll/core'
export default {
  name: 'WeLook',
  data () {
    return {
      look: {}
    }
  },

  mounted () {
    homecontent().then((data) => {
      this.look = data.data.data
      // new BScroll('.home-welook', { click: true })
      this.$nextTick(() => {
        /* eslint-disable */
        new BScroll('.home-welook', { click: true })
      })
    })

    // console.log(typeof this.$route.params.id)
    if (this.$route.params.id === '1') {
      homecontent().then((data) => {
        this.look = data.data.data
      })
    }
    if (this.$route.params.id === '2') {
      getStoreNew().then((data) => {
        this.look = ''
        this.look = data.data.data
        // for (let i = 0; i < data.data.length; i++) {
        //   if ((data.data[i].proId) === 3) {
        //     this.look = data.data[i].data
        //   }
        // }
      })
    }
    if (this.$route.params.id === '3') {
      getStoreSales().then((data) => {
        this.look = ''
        this.look = data.data.data
        // for (let i = 0; i < data.data.length; i++) {
        //   if ((data.data[i].proId) === 3) {
        //     this.look = data.data[i].data
        //   }
        // }
      })
    }

  },
  watch: {
    $route(to, from) {
      if (to.params.id === 2) {
        getStoreNew().then((data) => {
          this.look = ''
          this.look = data.data.data
          // for (let i = 0; i < data.data.length; i++) {
          //   if ((data.data[i].proId) === 3) {
          //     this.look = data.data[i].data
          //   }
          // }
        })
      }
      if (to.params.id === 1) {
        homecontent().then((data) => {
          this.look = data.data.data
        })
      }
      if (to.params.id === 3) {
        getStoreSales().then((data) => {
          this.look = ''
          this.look = data.data.data
          // for (let i = 0; i < data.data.length; i++) {
          //   if ((data.data[i].proId) === 3) {
          //     this.look = data.data[i].data
          //   }
          // }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
        line-height: 0.48rem;
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
