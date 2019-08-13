<template>
  <div>
    <div class="record">
      <!-- 微信 -->
      <div class="recordCore">
        <h1>登录</h1>
        <div class="recordbtn">
          <i class="iconfont">&#xe610;</i>
          <span>微信登录</span>
        </div>
        <!-- 其他登录 -->
        <div class="recordOther">
          <span></span>
          <p>其他登录方式</p>
        </div>
        <!-- QQ -->
        <div class="recordbottom">
          <li>
            <a
              href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=201293&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&scope=all&display=mobile&response_type=code&redirect_uri=https%3A%2F%2Fportal.mogu.com%2Fuser-process%2Ftransition.html%3Fthird%3Dqq%26platform%3Dwap%26ptp%3D32.LLePO.0.0.CXyBZUvp&state=TASe9bg2s0ytubn&client_id=201293&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fpersonal-v2%2Findex.html%3Facm%3D3.mce.1_10_1jiv0.127180.0.hkqxRrx8TDQe0.pos_3-m_455426-sd_119-mf_71971_1133129-idx_3-mfs_4-dm1_5000%26ptp%3D32._mf1_1239_71971.0.0.N3GKcNPK"
            >
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/170831_68b918b6ikh668e8gibeg48bk82l3_90x90.png"
                alt
              />
            </a>
            <span>QQ登录</span>
          </li>
          <li>
            <a
              href="https://h5.mogu.com/user-process/existphone.html?ptp=32.qr95G.0.0.YuItofxU&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fpersonal-v2%2Findex.html%3Facm%3D3.mce.1_10_1jiv0.127180.0.ky4jrrx6bPkHc.pos_3-m_455426-sd_119-mf_71971_1133129-idx_3-mfs_4-dm1_5000%26ptp%3D32._mf1_1239_71971.0.0.oga2kxor"
            >
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/170831_1078gd17460490lak5g7edbhah17i_90x90.png"
                alt
              />
            </a>
            <span>免密登录</span>
          </li>
          <li>
            <a
              href="https://h5.mogu.com/user-process/account.html?ptp=32.qr95G.0.0.YuItofxU&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fpersonal-v2%2Findex.html%3Facm%3D3.mce.1_10_1jiv0.127180.0.ky4jrrx6bPkHc.pos_3-m_455426-sd_119-mf_71971_1133129-idx_3-mfs_4-dm1_5000%26ptp%3D32._mf1_1239_71971.0.0.oga2kxor"
            >
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/170831_136567k82ideakd452d8db8ca27ak_90x90.png"
                alt
              />
            </a>
            <span>账号登录</span>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'record'
}
</script>

<style lang="less" scoped>
.record {
  width: 100%;
  // margin-top: 22%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 99999;
  background: white;
  .recordCore {
    height: 100%;
    padding: 0 25 * 2px 0 25 * 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 28 * 2px;
      font-weight: 500;
      color: #444;
      margin-bottom: 42 * 2px;
    }
    .recordbtn {
      width: 100%;
      height: 49 * 2px;
      background-color: rgb(9, 187, 7);
      border-radius: 27 * 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      i {
        font-size: 26 * 2px;
      }
      span {
        font-size: 18 * 2px;
        margin-left: 10 * 2px;
      }
    }
    .recordOther {
      width: 100%;
      margin: 60 * 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        display: block;
        height: 0.5 * 2px;
        background: #bbb;
        width: 7%;
      }
      p {
        color: #999;
        font-weight: 400;
        font-size: 15 * 2px;
        margin-top: 34 * 2px;
        margin-bottom: 10 * 2px;
      }
    }
    .recordbottom {
      width: 80%;
      padding: 21 * 2px 0 * 2px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 39 * 2px;
          height: 39 * 2px;
        }
        span {
          margin-top: 11 * 2px;
          font-size: 14 * 2px;
        }
      }
    }
  }
}
</style>
