<template>
  <div class="dynamic">
    <div class="lists" v-for="(l,i) in lists" :key="i">
      <div class="top">
        <div class="headpic">
          <img :src="l.top.head" alt />
        </div>
        <div class="title">
          <p class="name">{{l.top.name}}</p>
          <p class="ladel">
            <span v-for="(b,k) in l.top.ladel" :key="k">{{b}}</span>
          </p>
        </div>
        <div class="follow">
          <span>关注</span>
        </div>
      </div>
      <carousel :banner="l.banner"></carousel>
      <look-operate :l="l"></look-operate>
      <look-goods :show="l.show"></look-goods>
      <look-details :details="l.details"></look-details>
      <div class="topic">
        <span v-for="(t,g) in l.topic" :key="g">{{t}}</span>
      </div>
      <look-label :label="l.label"></look-label>
      <div class="record">
        <span v-for="(r,k) in l.record" :key="k">
          {{r}}
          <i>|</i>
        </span>
      </div>
      <div class="comment">
        <span class="img">
          <img :src="l.comment" alt />
        </span>
        <span class="word">添加评论…</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getDynamic } from '@/api/index.js'
import Carousel from '@/components/cate/dynamic/Carousel'
import lookOperate from '@/components/cate/dynamic/LookOperate'
import lookGoods from '@/components/cate/dynamic/LookGoods'
import lookDetails from '@/components/cate/dynamic/LookDetails'
import lookLabel from '@/components/cate/dynamic/LookLabel'
export default {
  name: 'dynamic',
  data () {
    return {
      lists: []
    }
  },
  created () {
    getDynamic().then((data) => {
      this.lists = data.data.data
    })
  },
  components: {
    Carousel,
    lookOperate,
    lookGoods,
    lookDetails,
    lookLabel
  }
}
</script>
<style lang="less" scoped>
.dynamic {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1300;
  width: 100%;
  background: #f4f4f4;
  .lists {
    width: 94%;
    padding: 20px 3% 30px 3%;
    background: #fff;
    margin-bottom: 20px;
    .top {
      margin-bottom: 20px;
      height: 80px;
      display: flex;
      flex-wrap: nowrap;
      .headpic {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .title {
        flex: 1;
        margin-left: 20px;
        margin-top: 10px;
        .name {
          font-size: 30px;
        }
        .ladel {
          margin-top: 10px;
          span {
            font-size: 20px;
            margin-left: 10px;
          }
        }
      }
      .follow {
        width: 120px;
        height: 50px;
        font-size: 24px;
        border: 1px solid #666;
        color: #666;
        line-height: 50px;
        text-align: center;
        border-radius: 30px;
        margin-top: 15px;
      }
    }
    .topic {
      color: #f46;
      font-size: 28px;
      line-height: 40px;
    }
    .record {
      span {
        padding-right: 10px;
        color: #999;
        i {
          margin-left: 10px;
        }
      }
    }
    .comment {
      margin-top: 20px;
      display: flex;
      justify-content: flex-start;
      .img {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .word {
        font-size: 30px;
        line-height: 60px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
