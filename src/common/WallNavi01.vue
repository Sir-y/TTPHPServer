<template>
  <div class="wall01">
    <ul class="wall01-uls">
      <router-link tag="li" :to="{name:'Item01',params: {id:1}}">
        <div class="item01">综合</div>
      </router-link>
      <router-link tag="li" :to="{name:'Item01',params: {id:2}}">
        <div class="item02">销量</div>
      </router-link>
      <router-link tag="li" :to="{name:'Item01',params: {id:3}}">
        <div class="item03">新品</div>
      </router-link>
      <!-- 不跳转就行了 -->
      <li>
        <div @click="itemslide" :class="{active: isRed, trans: !isRed}" class="item04">价格</div>
      </li>
    </ul>
    <!-- <Item01></Item01>
    <Item02></Item02>
    <Item03></Item03>-->
  </div>
</template>

<script>
import Item01 from '@/components/home/Homecontent/components/Hctop/components/wallList/Item01'
export default {
  name: 'WallNavi01',
  components: {
    Item01
  },
  data () {
    return {
      isRed: false,
      item: ''
    }
  },
  methods: {
    itemslide () {
      this.isRed = !this.isRed
      this.$store.commit('showwp')
      // console.log(this.$store)
    }
  }
  // watch: {
  //   $route (to, from) {
  //     if (to.params.id === 1) {

  //     }
  //     console.log(to.params.id)
  //   }
  // }

}
</script>

<style scoped lang="less">
.trans {
  color: rgb(51, 51, 51);
}
.router-link-active {
  color: red;
}
.wall01 {
  width: 100%;
  height: 40 * 2px;
  // position: fixed;
  // left: 0;
  // top: 46*2px;
  z-index: 90;
  background: #fff;
  .wall01-uls {
    width: 100%;
    height: 40 * 2px;
    border-bottom: 1 * 2px solid rgb(238, 238, 238);
    li {
      width: 24%;
      height: 40 * 2px;
      display: inline-block;
      line-height: 40 * 2px;
      text-align: center;
      position: relative;
      // &表示当前元素 代替当前元素
      // &.router-link-exact-active.router-link-active {
      //   color: orangered;
      // }

      .item01 {
        display: inline-block;
        width: 100%;
        height: 20 * 2px;
        line-height: 20 * 2px;
      }

      .item02 {
        display: inline-block;
        width: 100%;
        height: 20 * 2px;
        line-height: 20 * 2px;
        border-left: 1 * 2px solid rgb(201, 201, 201);
      }

      .item03 {
        display: inline-block;
        width: 100%;
        height: 20 * 2px;
        line-height: 20 * 2px;
        border-left: 1 * 2px solid rgb(201, 201, 201);
      }

      .active {
        color: orangered;
      }
      .item04 {
        display: inline-block;
        width: 100%;
        height: 20 * 2px;
        line-height: 20 * 2px;
        border-left: 1 * 2px solid rgb(201, 201, 201);
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 2 * 2px;
          right: 10 * 2px;
          width: 10 * 2px;
          height: 10 * 2px;
          border-left: 1 * 2px solid #c3c3c3;
          border-bottom: 1 * 2px solid #c3c3c3;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
