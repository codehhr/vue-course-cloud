<template>
  <div class="page">
    <div>
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
      <course-video-detail
        :courseDetailData="courseDetailData"
      ></course-video-detail>
      <!-- 视频详情 end -->

      <!-- 视频详情导航 start -->
      <course-video-detail-nav
        :courseDetailData="courseDetailData"
      ></course-video-detail-nav>
      <!-- 视频详情导航 end -->
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader/PageHeader";
import HeaderNav from "../components/PageHeader/HeaderNav";
import PageFooter from "../components/PageFooter";
import CourseVideoDetail from "../components/CourseDetail/CourseVideoDetail";
import CourseVideoDetailNav from "../components/CourseDetail/CourseVideoDetailNav";
import { requestCourseDetailData } from "../api/api";

export default {
  name: "CourseDetail",
  data() {
    return {
      courseDetailData: {},
    };
  },
  methods: {
    getCourseDetailData() {
      requestCourseDetailData(this.$route.params.id).then((res) => {
        this.courseDetailData = res.data;
      });
    },
  },
  created() {
    this.getCourseDetailData();
  },
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
  min-height: 100vh;
  font-size: 16px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
}
</style>
