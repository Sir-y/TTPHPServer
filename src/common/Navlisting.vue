<template>
  <div>
    <ul class="uls">
      <router-link tag="li" to="/Live/">
        <p>热门</p>
      </router-link>
      <router-link tag="li" to="/Live/Dressing">
        <p>穿搭</p>
      </router-link>
      <router-link tag="li" to="/Live/Beautymakeup">
        <p>美妆</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navlist'
}
</script>

<style scoped lang="less">
.uls {
  list-style: none;
  background: #fff;
  list-style: none;
  height: 45 * 2px;
  border-top: 1 * 2px solid #ddd;
  border-bottom: 1 * 2px solid rgb(240, 240, 240);
  position: fixed;
  top: 47 * 2px;
  z-index: 999;
  width: 100%;
  display: flex;
}
.uls li {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 45 * 2px;
  text-align: center;
}
.uls li.router-link-exact-active.router-link-active {
  color: red;
  border-bottom: 1 * 2px solid red;
}
.uls li p {
  font-size: 16 * 2px;
  line-height: 45 * 2px;
}
</style>
