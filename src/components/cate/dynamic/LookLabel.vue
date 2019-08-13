<template>
  <div class="look-label">
    <ul>
      <li v-for="(l,i) in label" :key="i">
        <img :src="l.img" alt />
        <span>{{l.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'looklabel',
  props: ['label']
}
</script>
<style lang="less" scoped>
.look-label {
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      display: inline-block;
      padding: 10px 10px;
      background: #f4f4f4;
      margin-right: 20px;
      margin-bottom: 20px;
      img {
        display: inline-block;
        width: 28px;
        height: 28px;
        border: 1px solid #999;
      }
      span {
        font-size: 26px;
        color: #666;
      }
    }
  }
}
</style>
