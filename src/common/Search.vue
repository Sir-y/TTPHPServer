<template>
  <div class="search" id="search" ref="sea">
    <!-- 搜索栏 -->
    <div class="searchTop">
      <router-link tag="div" to="/" class="searchTopLeft">
        <i class="iconfont searchTopI">&#xe682;</i>
      </router-link>
      <form action class="searchTopform" @click.stop>
        <input
          type="text"
          placeholder="搜索"
          v-model="search"
          @keyup.enter="writeIng"
          @mouseover="actives"
          @mouseleave="actives2"
          :style="active"
        />
        <i class="iconfont fromi" v-if="i" @click="ibtn">&#xe60d;</i>
        <a @click="writeIng">搜索</a>
      </form>
    </div>
    <!-- 历史搜索 -->
    <div class="history">
      <div class="historyTop">
        <span>历史搜索</span>
        <i class="iconfont historyTopI1">&#xe9cf;</i>
        <i class="iconfont historyTopI2" @click="move">&#xe697;</i>
      </div>
      <div class="historyBottom">
        <p v-for="(his,i) in writes" :key="i">{{his}}</p>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="history" style="border-bottom: none;">
      <div class="historyTop">
        <span>热门搜索</span>
        <i class="iconfont historyTopI1">&#xe60c;</i>
      </div>
      <ul>
        <li v-for="(li,index) in searchdata.black" :key="index" :class="{'color':li.color==='red'}">
          <a href>{{li.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSearch } from '@/api/index'

export default {
  name: 'Search',
  data () {
    return {
      search: '',
      searchdata: {},
      writes: ['暂无历史搜索'],
      active: '',
      i: false
    }
  },
  created () {
    // document.querySelector('#search').style.height = window.screen.availHeight

    // this.$refs.sea.style.height = window.screen.availHeight
    // console.log(this.$refs.sea, window.screen.availHeight)
  },
  mounted () {
    this.getLocaStorage()
    getSearch().then(({ data }) => {
      this.searchdata = data
    })
  },
  methods: {
    writeIng () {
      if (this.writes[0] === '暂无历史搜索') {
        this.writes.shift('暂无历史搜索')
      }
      if (this.search === '') {
        this.search = ''
      } else {
        this.writes.push(this.search)
      }
      this.search = ''
      localStorage.setItem('writess', JSON.stringify(this.writes))
    },
    ibtn () {
      this.search = ''
    },
    move () {
      this.writes.splice(0, this.writes.length)
      this.writes.push('暂无历史搜索')
      localStorage.setItem('writess', JSON.stringify(this.writes))
    },
    actives () {
      this.active = 'border: 1*2px solid red;'
    },
    actives2 () {
      this.active = 'border: 1*2px solid #aaa;'
    },
    getLocaStorage () {
      var x = localStorage.getItem('writess')
      if (x == null) {
        this.writes = []
      } else {
        this.writes = JSON.parse(x)
      }
    }
  },
  watch: {
    search (to, from) {
      if (this.search === '') {
        this.i = false
      } else {
        this.i = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
a {
  color: #666;
}
.searchTopform {
  position: relative;
  i {
    position: absolute;
    right: 130px;
  }
  .fromi {
    color: blue;
  }
}
.search {
  width: 100%;
  // height: 1000%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 9999;
  .searchTop {
    width: 100%;
    padding: 5 * 2px 0 * 2px;
    height: 35 * 2px;
    border-bottom: 1 * 2px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .searchTopLeft {
      display: flex;
      align-items: center;
    }
    .searchTopI {
      color: #aaa;
      font-size: 18 * 2px;
      margin-left: 10 * 2px;
    }
    form {
      display: flex;
      align-items: center;
      width: calc(680 * 2px / 2);
      a {
        color: #666;
        font-size: 14 * 2px;
      }
    }
    input {
      width: 275 * 2px;
      height: 10 * 2px;
      background-color: #fff;
      border-radius: 7 * 2px;
      border: 1 * 2px solid #aaa;
      padding: 7 * 2px 5 * 2px;
      margin-right: 18 * 2px;
    }
  }
  .history {
    color: #999;
    margin-top: 10 * 2px;
    padding: 14 * 2px 14 * 2px;
    border-bottom: 1 * 2px solid #eee;
    .historyTop {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: calc(26 * 2px / 2);
      span {
        margin-left: calc(40 * 2px / 2);
      }
      .historyTopI1 {
        position: absolute;
        left: 0 * 2px;
        font-size: calc(28 * 2px / 2);
      }
      .historyTopI2 {
        font-size: calc(40 * 2px / 2);
      }
    }
    .historyBottom {
      padding-top: calc(28 * 2px / 2);
      padding-left: calc(38 * 2px / 2);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      p {
        border: 1 * 2px solid #f5f5f5;
        padding: 5 * 2px 5 * 2px;
        color: #666;
        font-size: calc(27 * 2px / 2);
        margin-bottom: 15 * 2px;
        margin-left: calc(15 * 2px / 2);
      }
    }
    ul {
      width: 95%;
      margin-top: 20 * 2px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 40 * 2px;
        height: calc(50 * 2px / 2);
        color: #666;
        font-size: calc(26 * 2px / 2);
        border-radius: 5 * 2px;
        border: 1 * 2px solid #f5f5f5;
        padding: 1 * 2px 6 * 2px;
        margin-left: calc(15 * 2px / 2);
        margin-top: calc(20 * 2px / 2);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .color a {
        color: red;
      }
    }
  }
}
</style>
