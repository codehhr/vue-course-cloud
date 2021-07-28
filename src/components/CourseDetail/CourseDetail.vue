<template>
  <div class="page">
    <div class="detailpage-header-outer">
      <page-header>
        <template v-slot:in>
          <div>
            <header-nav></header-nav>
          </div>
        </template>
      </page-header>
    </div>

    <!-- 面包屑导航 start -->
    <a-breadcrumb class="breadcrumb-nav">
      <a-breadcrumb-item href="">
        <a-icon type="home" />
        <span>首页</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <span>视频详情</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 面包屑导航 end -->

    <!-- 视频详情 start -->
    <course-video-detail></course-video-detail>
    <!-- 视频详情 end -->

    <!-- 视频详情导航 start -->
    <course-video-detail-nav></course-video-detail-nav>
    <!-- 视频详情导航 end -->

    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "../PageHeader/PageHeader";
import HeaderNav from "../PageHeader/HeaderNav";
import PageFooter from "../PageFooter";
import CourseVideoDetail from "./CourseVideoDetail";
import CourseVideoDetailNav from "./CourseVideoDetailNav";

export default {
  name: "CourseDetail",
  components: {
    PageHeader,
    HeaderNav,
    PageFooter,
    CourseVideoDetail,
    CourseVideoDetailNav,
  },
};
</script>

<style scoped lang="less">
.page {
  font-size: 16px;
  background-color: #f4f4f4;
  .detailpage-header-outer {
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
</style>
<style lang="less">
@main-width: 1200px;

.page {
  .detailpage-header-outer {
    a.index {
      color: #000000;
      &::before {
        background-color: transparent;
      }
    }
  }
  // 面包屑导航 start
  .breadcrumb-nav {
    margin: 10px auto;
    width: @main-width;
    text-align: left;
  }
  // 面包屑导航 end
  .course-video-detail {
  }
}
</style>
