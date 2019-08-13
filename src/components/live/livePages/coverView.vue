<template>
  <div class="coverView flex-column">
    <div class="header">
      <div class="flex-row">
        <div
          class="actor"
          style="background-image:url(https://s5.mogucdn.com/mlcdn/5abf39/170822_1gdec0lh58d617i4j7k1je4j42468_400x400.jpg_50x50.jpg)"
        ></div>
        <div class="info">
          <div class="actor-name">我是小仙柚</div>
          <p class="hot">热度 67444</p>
        </div>
        <div class="focus">关注</div>
      </div>
    </div>
    <div class="scroll-notice">
      <div class="flex-row">
        <!-- <img src="../../../../assets/img/laba.png" alt /> -->
        <div class="roll-view">
          <div class="notice">
            <span>身高:160cm</span>
            <span>体重:45kg</span>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-goods">
      <div
        class="goods-item"
        style="background-image:url(http://s3.mogucdn.com/mlcdn/c45406/190722_2906g8jcd0ih6fhe9f59046gj0h45_640x1011.jpg_100x100.jpg)"
      >
        <div class="price">￥88.00</div>
      </div>
      <div
        class="goods-item"
        style="background-image:url(http://s3.mogucdn.com/mlcdn/c45406/190722_2906g8jcd0ih6fhe9f59046gj0h45_640x1011.jpg_100x100.jpg)"
      >
        <div class="price">￥35.90</div>
      </div>
    </div>
    <div class="footer-mask">
      <div class="comments">
        <div class="comments-list flex-column">
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
          <div class="comment flex-row">
            <div class="name">小仙柚</div>
            <div class="intro">进房准备剁手了</div>
          </div>
        </div>
      </div>

      <div class="foot-section">
        <div class="flex-row">
          <div class="icon-comment"></div>
          <div class="icon-share"></div>
          <div class="icon-sell-bag">
            <div class="sell-bag-num">83</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.coverView {
  background-image: url(../../../assets/img/coverView-bg.jpg);
  background-size: 100%;
  height: 650 * 2px;
  .header {
    padding-top: 10 * 2px;
    padding-left: 9 * 2px;
    height: 50 * 2px;
    background-image: linear-gradient(
      0deg,
      transparent,
      rgba(0, 0, 0, 0.02) 18%,
      rgba(0, 0, 0, 0.6)
    );
    .flex-row {
      align-items: center;
      .actor {
        position: relative;
        margin-right: 5 * 2px;
        width: 25 * 2px;
        height: 25 * 2px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: 100% auto;
      }
      .info {
        color: #fff;
        line-height: 1;
        opacity: 0.8;
        margin-right: 7.5 * 2px;
        .actor-name {
          font-size: 14 * 2px;
        }
        .hot {
          font-size: 13 * 2px;
        }
      }
      .focus {
        line-height: 25 * 2px;
        text-align: center;
        font-size: 12 * 2px;
        width: 44 * 2px;
        height: 25 * 2px;
        border-radius: 25 * 2px;
        border: 1 * 2px solid #ff5777;
        color: #ff5777;
      }
    }
  }
  .scroll-notice {
    .flex-row {
      img {
        width: 12 * 2px;
      }
      .notice {
        margin-left: 3 * 2px;
        white-space: nowrap;
        color: #fff;
        font-size: 10 * 2px;
      }
      overflow: hidden;
      padding-left: 10 * 2px;
      padding-right: 5 * 2px;
      width: 110 * 2px;
      height: 28 * 2px;
      border-top-right-radius: 28 * 2px;
      border-bottom-right-radius: 28 * 2px;
      background-color: rgba(0, 0, 0, 0.2);
      align-items: center;
    }
  }
  .recommend-goods {
    width: 68 * 2px;
    margin-top: 7.5 * 2px;
    margin-bottom: auto;
    padding: 4 * 2px;
    border-radius: 4 * 2px;
    background-color: rgba(0, 0, 0, 0.2);
    .goods-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 8 * 2px;
      height: 60 * 2px;
      background-repeat: no-repeat;
      background-size: cover;
      .price {
        padding: 0 5 * 2px;
        width: fit-content;
        color: #fff;
        font-size: 12 * 2px;
        line-height: 1.2;
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .footer-mask {
    width: 100%;
    margin-top: auto;
    padding-top: 10 * 2px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(0, 0, 0, 0.02) 18%,
      rgba(0, 0, 0, 0.4)
    );
    .comments {
      margin-left: 10 * 2px;
      width: 280 * 2px;
      height: 200 * 2px;
      overflow-y: auto;
      .comments-list {
        .comment {
          align-items: center;
          padding-left: 8 * 2px;
          padding-right: 8 * 2px;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          height: 20 * 2px;
          border-radius: 20 * 2px;
          background-color: rgba(0, 0, 0, 0.1);
          font-size: 12 * 2px;
          margin-bottom: 5 * 2px;
          .name {
            color: #ff5777;
            margin-right: 3 * 2px;
          }
          .intro {
            color: #fff;
          }
        }
      }
    }
    .foot-section {
      margin: 10 * 2px;
      .flex-row {
        div {
          width: 40 * 2px;
          height: 40 * 2px;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
        }
        .icon-comment {
          background-image: url(../../../assets/img/coverVIew-footer01.png);
          background-size: 23 * 2px;
          background-repeat: no-repeat;
          background-position: center;
          margin-right: 10 * 2px;
        }
        .icon-share {
          background-image: url(../../../assets/img/coverVIew-footer02.png);
          background-size: 23 * 2px;
          background-repeat: no-repeat;
          background-position: center;
          margin-right: 10 * 2px;
        }
        .icon-sell-bag {
          background-image: url(../../../assets/img/coverVIew-footer03.png);
          background-size: 23 * 2px;
          background-repeat: no-repeat;
          background-position: center;
          margin-left: auto;
          position: relative;
          .sell-bag-num {
            position: absolute;
            top: 0;
            right: 0;
            width: 0.4rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            background-color: #f5342f;
            color: #fff;
            font-size: 12 * 2px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
body {
  height: 100%;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.img-block {
  display: block;
}
.img-block img {
  display: block;
  height: 100%;
  width: 100%;
}
.content {
  margin: 0 18/2 * 2px;
}
</style>
