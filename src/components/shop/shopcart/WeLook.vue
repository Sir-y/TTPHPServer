<template>
  <div class="welook">
    <h3>{{look.title}}</h3>
    <div class="listbot">
      <ul>
        <li v-for="(ite,ind) in look.list" :key="ind">
          <a href="#">
            <div class="topp">
              <img :src="ite.limg" alt />
              <div class="abs">
                <a href="#">
                  <img src="../../../../static/img/welook1.png" alt />
                </a>
              </div>
            </div>
            <div class="cent">
              <span v-for="(e,i) in ite.lsp" :key="i">{{e}}</span>
            </div>
            <div class="bott">
              <span>
                <b>￥</b>
                <b class="btwo">{{ite.mony}}</b>
              </span>
              <span>
                {{ite.collection}}
                <i class="iconfont">&#xe6cc;</i>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeLook',
  props: ['look']
}
</script>

<style lang="less" scoped>
a {
  color: #000000;
}
.welook {
  width: 100%;
  background: #efefef;
  h3 {
    padding-left: 20 * 2px;
    background: #fafafa;
    height: 50 * 2px;
    font-size: 20 * 2px;
    color: #666;
    line-height: 50 * 2px;
  }
  .listbot {
    width: 100%;
    overflow: auto;
    ul {
      width: 100%;
      li {
        display: block;
        width: 47%;
        float: left;
        background: #ffffff;
        margin: 10 * 2px 2% 0 2%;
        a {
          width: 100%;
          .topp {
            // position: relative;
            img {
              width: 100%;
            }
            .abs {
              position: absolute;
              right: 0;
              bottom: 0;
              width: 33 * 2px;
              height: 33 * 2px;
              a {
                img {
                  width: 28 * 2px;
                  height: 28 * 2px;
                }
              }
            }
          }
          .cent {
            width: 100%;
            height: 56 * 2px;
            overflow: hidden;
            span {
              display: block;
              float: left;
              font-size: 12 * 2px;
              margin: 2 * 2px 2 * 2px;
              padding: 5 * 2px 4 * 2px;
              background: #eff3f6;
              color: #5a6f7a;
            }
          }
          .bott {
            width: 100%;
            line-height: 30 * 2px;
            font-size: 16 * 2px;
            span {
              .btwo {
                margin-left: -5 * 2px;
              }
            }
            span:nth-of-type(2) {
              float: right;
              font-size: 14 * 2px;
              color: #666;
              i {
                font-size: 16 * 2px;
              }
            }
          }
        }
      }
      li:nth-of-type(2n) {
        margin-left: 0;
      }
    }
  }
}
</style>
