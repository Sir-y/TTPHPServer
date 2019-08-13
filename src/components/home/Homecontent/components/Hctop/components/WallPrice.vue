<template>
  <div class="wpic">
    <transition name="fade">
      <div class="wallprice" v-show="display">
        <div class="price-level">
          <div class="price-btn">50 - 80</div>
          <div class="price-btn">50 - 80</div>
          <div class="price-btn">50 - 80</div>
        </div>
        <div class="price-input">
          <div class="label">区间(元)</div>
          <input type="number" class="min-price" />
          <span></span>
          <input type="number" class="max-price" />
          <a class="confirm-btn">确认</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WallPrice',
  data () {
    return {

    }
  },
  computed: {
    display () {
      return this.$store.state.wpisShow
    }
  }
}
</script>

<style scoped lang="less">
.wpic {
  position: absolute;
  top: 85 * 2px;
  left: 0;
  width: 100%;
  z-index: 9999;
}
.wallprice {
  width: 100%;
  height: 100 * 2px;
  overflow: hidden;
  background: #fff;
  z-index: 89;
  .price-level {
    width: 100%;
    padding: 2% 0 1%;
    .price-btn {
      width: 30%;
      text-align: center;
      font-size: 15 * 2px;
      height: 30 * 2px;
      line-height: 30 * 2px;
      background: #f3f3f3;
      margin: 2% 0 0 2%;
      display: inline-block;
    }
  }
  .price-input {
    box-sizing: border-box;
    width: 100%;
    padding: 0 2%;
    font-size: 15 * 2px;
    .label {
      display: inline-block;
      height: 30 * 2px;
      line-height: 30 * 2px;
      font-size: 14 * 2px;
    }
    .min-price {
      display: inline-block;
      width: 75 * 2px;
      height: 30 * 2px;
      line-height: 30 * 2px;
      margin: 5 * 2px 0 0 5 * 2px;
      padding: 0 5 * 2px;
      border: 1 * 2px solid #e5e5e5;
      overflow: hidden;
      text-align: center;
      font-size: 15 * 2px;
    }
    span {
      display: inline-block;
      width: 10 * 2px;
      height: 0;
      border-top: 1 * 2px solid #cbcbcb;
      margin: 25 * 2px 0 0 10 * 2px;
    }
    .max-price {
      display: inline-block;
      width: 75 * 2px;
      height: 30 * 2px;
      line-height: 30 * 2px;
      margin: 5 * 2px 0 0 5 * 2px;
      padding: 0 5 * 2px;
      border: 1 * 2px solid #e5e5e5;
      overflow: hidden;
      text-align: center;
      font-size: 15 * 2px;
    }
    .confirm-btn {
      display: inline-block;
      height: 30 * 2px;
      line-height: 30 * 2px;
      margin-top: 10 * 2px;
      text-align: center;
      width: 80 * 2px;
      margin-left: 5 * 2px;
      background: #ff5b76;
      color: #fff;
      border-radius: 2 * 2px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
  // background: white;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
  background: rgba(255, 255, 255, 0);
}
</style>
