<template>
  <div class="look-goods">
    <ul>
      <li v-for="(li,i) in show" :key="i">
        <div class="img">
          <img :src="li.img" alt />
        </div>
        <div class="content">
          <p class="title">{{li.title}}</p>
          <p class="word">
            <img :src="li.icon" alt />
            {{li.word}}
          </p>
          <p class="price">{{li.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'lookgoods',
  props: ['show']
}
</script>
<style lang="less" scoped>
.look-goods {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      background: #f4f4f4;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      margin-top: 20px;
      margin-bottom: 20px;
      .img {
        width: 35%;
        img {
          width: 100%;
        }
      }
      .content {
        width: 60%;
        padding-top: 20px;
        .title {
          font-size: 24px;
          font-weight: bold;
        }
        .word {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 20px;
          color: #999;
          margin: 10px 0px;
          img {
            display: inline-block;
            width: 20px;
            height: 20px;
          }
        }
        .price {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
