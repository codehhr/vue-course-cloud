<template>
  <div>
    <!-- 头部 start -->
    <PageHeader></PageHeader>
    <!-- 头部 end -->

    <!-- 轮播图 start -->
    <Carousel></Carousel>
    <!-- 轮播图 end -->

    <!-- 直播课程 start -->
    <LiveCourse>
      <template v-slot:live-course-title>
        <div>
          <h1>直播课程</h1>
        </div>
      </template>
    </LiveCourse>
    <!-- 直播课程 end -->

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

    <!-- 友情链接 start -->
    <PageFooter></PageFooter>
    <!-- 友情链接 end -->
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import Carousel from "../components/Carousel";
import CourseList from "../components/CourseList";
import LiveCourse from "../components/LiveCourse";
import PageFooter from "../components/PageFooter";

export default {
  name: "index",
  components: {
    PageFooter,
    PageHeader,
    Carousel,
    CourseList,
    LiveCourse,
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
