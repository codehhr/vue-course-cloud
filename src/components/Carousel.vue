<template>
  <a-carousel arrows>
    <div
      slot="prevArrow"
      :slot-scope="'props'"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
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
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
/* 轮播图 start */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
/* 轮播图 end */
</style>
