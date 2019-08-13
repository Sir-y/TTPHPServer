<template>
  <!-- 这是我的主要页面 是一个组件 在Home中引入的-->
  <!-- 我的JSON 在 static/Data/Finddata中 引入即可-->
  <div class="Find bg">
    <ul class="FindUl" ref="FindUl">
      <!-- 这是选项卡 -->
      <li
        v-for="(tab,i) in tabs"
        @click="btn($event, i,tab.view)"
        :key="i"
        :class="{liemactive:active==i}"
      >
        <span>{{tab.type}}</span>
        <em v-show="active==i"></em>
      </li>
    </ul>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import find from '@/components/home/Find/Children/find'
import follow from '@/components/home/Find/Children/follow'
import popular from '@/components/home/Find/Children/popular'
export default {
  name: 'Find',
  props: ['finds', 'H'],
  data () {
    return {
      active: 0,
      currentView: 'find',
      tabs: [
        {
          type: '发现',
          view: 'find'
        },
        {
          type: '关注',
          view: 'follow'
        },
        {
          type: '流行',
          view: 'popular'
        }
      ]

    }
  },
  methods: {
    btn (event, i, v) {
      this.active = i
      this.currentView = v
      event.preventDefault()
    },
    scrollToTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      // console.log(this.H)
      var a = parseInt(this.H)
      if (scrollTop > a) {
        this.$refs.FindUl.style.position = 'fixed'
        this.$refs.FindUl.style.zIndex = 999
        this.$refs.FindUl.style.top = 0
      } else {
        this.$refs.FindUl.style.position = 'relative'
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    }
  },
  components: {
    find,
    follow,
    popular
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style lang="less" scoped>
.bg {
  background: white;
}
.Find {
  width: 100%;
  // height: 42 * 2 * 2px;
  border-bottom: 1 * 2 * 2px solid #e2e2e2;
  .FindUl {
    width: 100%;
    display: flex;
    background: white;
    align-items: center;
    li {
      width: 34%;
      height: 20 * 2 * 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        font-size: 8 * 2 * 2px;
        font-weight: 700;
      }
      em {
        margin-top: 3%;
        height: 1.5 * 2 * 2px;
        background: #ff5777;
        width: 20%;
      }
    }
  }
}
</style>
