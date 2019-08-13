<template>
  <div class="LiveBroadcast-top">
    <span class="mel">
      <div class="mel-box">
        <i class="iconfont">&#xea34;</i>
      </div>
    </span>
    <span class="mec">
      <p class="mec-p1">买衣服,闲逛蘑菇街!</p>
      <p class="mec-p2">
        <img src="../../../../src/assets/iconfont/xx.png" />
        <img src="../../../../src/assets/iconfont/xx.png" />
        <img src="../../../../src/assets/iconfont/xx.png" />
        <img src="../../../../src/assets/iconfont/xx.png" />
        <img src="../../../../src/assets/iconfont/xx.png" />
        <span class="mec-p2-span">超过两亿用户已下载</span>
      </p>
    </span>
    <span class="mer">
      <div class="mer-box">前往查看</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LiveBroadcast-top'
}
</script>

<style lang="less" scoped>
.LiveBroadcast-top {
  width: 100%;
  height: 47px;
  position: relative;
  border-bottom: 2px solid #eee;
  background: #fff;
  position: fixed;
  z-index: 999;
  top: 0px;
}
.LiveBroadcast-top .mel {
  width: 15%;
  height: 100%;
  position: absolute;
}
.LiveBroadcast-top .mel .mel-box {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #ff2262;
  margin-left: 15px;
  margin-top: 8px;
  border-radius: 6px;
}
.LiveBroadcast-top .mel .mel-box i {
  font-size: 18px;
  color: #fff;
}

.LiveBroadcast-top .mec {
  width: 60%;
  height: 100%;
  position: absolute;
  left: 15%;
}
.LiveBroadcast-top .mec .mec-p1 {
  margin-top: 8px;
  font-size: 12px;
}
.LiveBroadcast-top .mec .mec-p2 {
  position: relative;
}
.LiveBroadcast-top .mec .mec-p2 img {
  margin-top: 8px;
  display: inline-block;
  width: 10px;
  height: 10px;
}
.LiveBroadcast-top .mec .mec-p2 .mec-p2-span {
  display: inline-block;
  font-size: 10px;
  position: absolute;
  left: 75px;
  top: 9px;
  color: #888;
}
.mer {
  width: 25%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
.mer .mer-box {
  width: 75px;
  height: 25px;
  background: #ff4466;
  margin: auto;
  margin-top: 11px;
  border-radius: 5px;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
</style>
