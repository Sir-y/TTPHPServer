<template>
  <ul class="downapp">
    <!-- Logo 图标 -->
    <router-link tag="li" to="/" class="downlogo">
      <span class="iconfont downlogo01">&#xe690;</span>
    </router-link>
    <!-- character 文字 -->
    <router-link tag="li" to="/" class="downcharacter">
      <p>上万达人为你试穿全网品牌</p>
      <div class="downcharacterbox">
        <span class="iconfont star">&#xe629;</span>
        <span class="iconfont star">&#xe629;</span>
        <span class="iconfont star">&#xe629;</span>
        <span class="iconfont star">&#xe629;</span>
        <span class="iconfont star">&#xe629;</span>
        <span class="icon-fz">超过2亿用户已下载</span>
      </div>
    </router-link>
    <!-- button 按钮 -->
    <router-link tag="li" to="/" class="downbutton">
      <p>打开APP</p>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'DownApp'
}
</script>

<style lang='less' scoped>
.downapp {
  width: 100%;
  height: 35 * 2px;
  padding: 8 * 2px 0 0 0;
  z-index: 999;
  background: #fff;
  position: relative;
  border-bottom: 1 * 2px solid #ddd;

  li {
    text-align: center;
    font-size: 10 * 2px;
    float: left;
    .iconfont {
      font-size: 30 * 2px;
      margin-bottom: 2 * 2px;
    }
  }
  .downlogo {
    width: 15%;
    .downlogo01 {
      color: #f46;
    }
  }
  .downcharacter {
    width: 60%;
    p {
      width: 100%;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14 * 2px;
      text-align: left;
      margin-bottom: 5 * 2px;
    }
    .downcharacterbox {
      text-align: left;
      .star {
        font-size: 11 * 2px;
        color: orange;
      }
      .icon-fz {
        color: #8e8e92;
        font-size: 10 * 2px;
        margin-left: 13 * 2px;
      }
    }
  }
  .downbutton {
    width: 25%;
    p {
      width: 75%;
      height: 26 * 2px;
      line-height: 26 * 2px;
      color: #fff;
      background: #f46;
      text-align: center;
      border-radius: 5 * 2px;
      font-size: 12 * 2px;
    }
  }
}
</style>
