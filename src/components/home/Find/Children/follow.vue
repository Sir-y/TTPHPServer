<template>
  <div class="follow">
    <div class="followcore">
      <p v-for="(fow,index) in followdatas" :key="index">
        <img :src="fow.followimg" />
      </p>
    </div>
    <div class="followbottom">
      <p>你还没关注任何人</p>
      <div>去精选看看</div>
    </div>
  </div>
</template>

<script>
import { getFind } from '@/api/index'
export default {
  name: 'follow',
  data () {
    return {
      followdatas: []
    }
  },
  mounted () {
    getFind().then(({ data }) => {
      this.followdatas = data.followdata
    })
  }
}
</script>

<style lang="less" scoped>
.follow {
  width: 100%;
  .followcore {
    padding: 0.18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 70%;
        margin-top: 10%;
      }
    }
  }
  .followbottom {
    width: 100%;
    margin-bottom: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 11 * 2px;
      margin-bottom: 10 * 2px;
    }
    div {
      width: 93 * 2px;
      height: 34 * 2px;
      margin: 0 auto;
      background: #ff5777;
      border-radius: 0.05rem;
      text-align: center;
      line-height: 34 * 2px;
      color: #fff;
      font-size: 12 * 2px;
    }
  }
}
</style>
