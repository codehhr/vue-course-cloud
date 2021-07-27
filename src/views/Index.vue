<template>
  <div>
    <!-- 头部 start -->
    <CourseHeader></CourseHeader>
    <!-- 头部 end -->

    <!-- 轮播图 start -->
    <Carousel></Carousel>
    <!-- 轮播图 end -->

    <!-- 课程列表 start -->
    <div class="all-course-list">
      <CourseList page-size="10" type="free">
        <template v-slot:course-title>
          <div><h1>免费课程</h1></div>
        </template>
      </CourseList>
      <CourseList type="boutique">
        <template v-slot:course-title>
          <div><h1>精品课程</h1></div>
        </template>
      </CourseList>
      <CourseList type="discount">
        <template v-slot:course-title>
          <div><h1>限时折扣课程</h1></div>
        </template>
      </CourseList>
    </div>
    <!-- 课程列表 end -->
  </div>
</template>

<script>
import CourseHeader from '../components/CourseHeader.vue';
import Carousel from "../components/Carousel";
import CourseList from "../components/CourseList";

export default {
  name: "index",
  components: {
    Carousel,
    CourseList,
    CourseHeader,
  },
};
</script>

<style lang="less" scoped>

@main-width: 1200px;

// 课程
.all-course-list {
  margin: 0 auto;
  width: @main-width;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
