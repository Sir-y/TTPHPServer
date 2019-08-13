<template>
  <div class="find">
    <ul class="findUl">
      <li v-for="(f,i) in finddata" :key="i" @click="gotodynamic">
        <!-- 主体大图 -->
        <div class="licore">
          <img :src="f.bigimg" alt />
          <a href>
            <i class="iconfont licorei1">&#xe63a;</i>
          </a>
          <a href>
            <i class="iconfont licorei2">&#xe61d;</i>
          </a>
        </div>
        <!-- 简介 -->
        <div class="texts">{{f.text}}</div>
        <!-- 用户 -->
        <div class="user">
          <div class="uimg">
            <a href>
              <img :src="f.uimg" alt />
            </a>
          </div>
          <div class="utext">
            <span class="utspan1">{{f.uname}}</span>
            <span class="utspan2">{{f.uheight}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getFind } from '@/api/index'
export default {
  name: 'find',
  data () {
    return {
      finddata: []
    }
  },
  mounted () {
    // tabdata
    getFind().then(({ data }) => {
      this.finddata = data.core
    })
  },
  methods: {
    gotodynamic () {
      // alert(111)
      this.$router.push('/dynamic')
    }
  }
}
</script>

<style lang="less" scoped>
.find {
  padding: 7.68 * 2px;
  background: #f6f6f6;
}
.findUl {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    width: 32%;
    margin-bottom: 10 * 2px;
    background: white;
    .licore {
      height: 162 * 2px;
      position: relative;
      border-radius: 4 * 2px;
      overflow: hidden;
      img {
        width: 100%;
      }
      .licorei1 {
        color: rgb(212, 212, 216);
        top: 7 * 2px;
        right: 7 * 2px;
        position: absolute;
      }
      .licorei2 {
        color: rgb(235, 235, 240);
        bottom: 5 * 2px;
        right: 5 * 2px;
        position: absolute;
      }
    }
    .texts {
      color: #666;
      font-size: 9 * 2px;
      margin: 0.18rem 0.12rem 0;
      height: 0.58rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      line-height: 0.3rem;
    }
    .uimg {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      // padding: 0 0.12rem 0.2rem;
      margin-left: 0.2rem;
      margin-bottom: 0.2rem;
      margin-top: 0.2rem;
      margin-right: 0.08rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .user {
      margin-top: 8 * 2px;
      display: flex;
      justify-content: flex-start;
    }
    .utext {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .utspan1 {
        font-size: 0.23rem;
        font-weight: 700;
        color: #333;
      }
      .utspan2 {
        font-size: 0.2rem;
        line-height: 0.25rem;
        color: #333;
        margin-top: 1 * 2px;
      }
    }
  }
}
</style>
