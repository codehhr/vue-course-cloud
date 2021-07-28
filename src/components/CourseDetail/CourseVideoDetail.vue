<template>
  <div class="course-video-detail-outer">
    <div class="course-video-detail">
      <div
        class="cover"
        :style="
          `background: url('${courseDetailData.coverFileUrl}') 0 center no-repeat`
        "
      ></div>
      <div class="des">
        <div class="title">{{ courseDetailData.courseTitle }}</div>
        <div class="learn-num">
          <span>累计{{ courseDetailData.participationsCount }}人学习</span>
          <a-rate class="stars" :default-value="4" disabled />
        </div>
        <div class="price">
          <div class="free" v-if="courseDetailData.isFree == 1">
            <p>免费</p>
            <a-button class="free-play" type="primary">
              立即观看
            </a-button>
          </div>
          <div v-else class="discount">
            <span class="discount-price">
              ￥{{ courseDetailData.discountPrice }}
            </span>
            <span class="course-price">
              {{ courseDetailData.coursePrice }}
            </span>
            <p class="discount-desc">
              <a-tag color="orange">
                {{ courseDetailData.discountDesc }}
              </a-tag>
            </p>
            <div class="btns">
              <a-button
                class="btn"
                type="primary"
                style="background-color:rgb(255, 128, 0);border:rgb(255, 128, 0);;"
              >
                立即购买
              </a-button>
              <a-button class="btn" type="primary">
                加入购物车
              </a-button>
              <a-button class="collection" icon="heart">
                收藏
              </a-button>
            </div>
          </div>
        </div>
        <div class="btns"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseVideoDetail",
  props: {
    courseDetailData: Object,
  },
  created() {},
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@main-color: #00cf8c;

.course-video-detail {
  margin: 0 auto;
  padding: 0 20px;
  width: @main-width;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  .cover {
    margin-right: 60px;
    width: 360px;
    height: 220px;
    background-size: cover !important;
  }
  .des {
    position: relative;
    width: 676px;
    height: 220px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: #000000;
      font-size: 24px;
    }
    .learn-num {
      color: #999999;
      font-size: 14px;
      span {
        margin-right: 10px;
      }
    }
    .free {
      p {
        font-size: 24px;
        color: @main-color;
      }
      .free-play {
        width: 160px;
        height: 45px;
      }
    }
    .discount {
      .discount-price {
        font-size: 24px;
        color: #000000;
      }
      .course-price {
        font-size: 14px;
        color: #ff4f23;
        text-decoration: line-through;
      }
      .btns {
        .btn {
          margin-right: 10px;
          width: 160px;
          height: 45px;
        }
      }
    }
    .collection {
      position: absolute;
      top: 0;
      right: -60px;
      width: 110px;
      height: 30px;
    }
  }
}
</style>
