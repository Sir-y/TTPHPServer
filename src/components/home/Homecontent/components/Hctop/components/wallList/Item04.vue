<template>
  <!-- <router-link to="/HomeContent2/Item04" tag="div" class="item04" @click="itemslide">价格</router-link> -->
  <div @click="itemslide" :class="{active: isRed}" class="item04">价格</div>
</template>

<script>
// import WallPrice from '@/components/home/Homecontent/components/Hctop/components/WallPrice'
export default {
  name: 'Item04',
  data () {
    return {
      isRed: false
    }
  },
  methods: {
    itemslide () {
      this.isRed = !this.isRed
      this.$store.commit('showwp')
      // console.log(this.$store)
    }
  }
}
</script>

<style scoped lang="less">
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
</style>
