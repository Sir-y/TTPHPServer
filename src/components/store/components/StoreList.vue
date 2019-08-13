<template>
  <div class="store-list">
    <ul class="flex-row">
      <router-link
        tag="li"
        v-for="(item,inx) in storeList"
        :key="inx"
        to
        @click.native="getId(item.id)"
      >
        <div class="flex-column">
          <div class="img-block">
            <img :src="item.url" alt />
          </div>
          <p class="title">女装</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getId (id) {
      // console.log(this.storeList)
      // this.$router.push({
      //   path: `Page1?goods:${id}`
      // })
      this.$router.push({ path: 'Page1', query: { goods: id } })
    }
  },

  props: ['storeList']
}
</script>
<style lang="less" scoped>
.store-list {
  background-color: #fff;
  padding-bottom: 10/2 * 2px;
  .flex-row {
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      flex: 0 0 18%;
      margin-top: 10/2 * 2px;
      .flex-column {
        .img-block {
          width: 100/2 * 2px;
        }
        .title {
          height: 36/2 * 2px;
          line-height: 36/2 * 2px;
          font-weight: 400;
          text-align: center;
          margin-top: 7/2 * 2px;
          font-size: 25/2 * 2px;
        }
        align-items: center;
      }
    }
  }
}
</style>
