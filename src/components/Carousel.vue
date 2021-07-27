<template>
  <a-carousel arrows autoplay>
    <div
      slot="prevArrow"
      :slot-scope="'props'"
      class="custom-slick-arrow"
      style="left: 10px;"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow"
      :slot-scope="'props'"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <div
      class="slide-item"
      v-for="(item, index) in slideList"
      :key="index"
      :style="'background: url(' + item.imgUrlPc + ') center center no-repeat'"
    ></div>
  </a-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slideApi: `${this.$domain}/weChat/applet/course/banner/list`,
      number: "4",
      slideList: [],
    };
  },
  methods: {
    // 请求轮播图 start
    renderSlide() {
      this.$axios
        .get(`${this.slideApi}?number=${this.number}`)
        .then((res) => {
          if (res.data.code == 0) {
            this.slideList = res.data.data;
          } else {
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 请求轮播图 end
  },
  created() {
    this.renderSlide();
  },
};
</script>

<style scoped>
/* 轮播图 start */
.ant-carousel {
  height: 400px;
}
.ant-carousel >>> .slick-arrow {
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  z-index: 10;
}
.ant-carousel >>> .slick-arrow:nth-of-type(1) {
  background: url(../assets/prev.png) center center no-repeat;
}

.ant-carousel >>> .slick-arrow:nth-last-of-type(1) {
  background: url(../assets/next.png) center center no-repeat;
}

.ant-carousel >>> .slick-arrow {
  background-size: 20px 40px !important;
}

.ant-carousel >>> .slick-dots {
  height: auto;
}

.ant-carousel >>> .slick-slide {
  height: 100%;
}
/* 轮播图 end */
</style>

<style lang="less" scoped>
.slide-item {
  height: 400px;
  background-size: cover !important;
}
</style>
