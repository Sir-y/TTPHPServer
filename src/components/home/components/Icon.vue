<template>
  <div class="iicon">
    <div v-for="(item,index) in icon" :key="index" class="icon1">
      <!-- 默认为1 -->
      <!-- <router-link :to="{name:item.url,params: {id:1},meta: {title:item.p}}" class="icon-i">
        <img :src="item.img" alt />
        <span>{{ item.p }}</span>
      </router-link>-->
      <div @click="gotoDetail(item)" class="icon-i">
        <img :src="item.img" alt />
        <span>{{ item.p }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Icon',
  props: ['icon'],
  data () {
    return {

    }
  },
  methods: {
    gotoDetail (item) {
      // this.$route.meta = {
      //   title: '123'
      // }
      this.$store.commit('setSearchValue', item.p)
      this.$router.push({ name: item.url, params: { id: 1 } })
    }
  },
  mounted () {
    // console.log(123, this.item.p)
  }
}
</script>
<style lang="less" scoped>
.iicon {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .icon1 {
    display: inline-block;
    width: calc(100% / 5);
    .icon-i {
      display: block;
      text-align: center;
      img {
        width: 70%;
      }
      span {
        color: rgb(102, 102, 102);
        font-size: 13 * 2px;
        display: block;
        margin: 6 * 2px 0 11 * 2px 0;
      }
    }
  }
}
</style>
