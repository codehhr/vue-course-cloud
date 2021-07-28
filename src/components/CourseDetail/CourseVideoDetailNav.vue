<template>
  <div class="course-video-detail-nav">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="课程描述">
        <p class="course-detail" v-html="courseDetailData.courseDetail"></p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="目录">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="3" tab="评论">
        Content of Tab Pane 1
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "CourseVideoDetailNav",
  props: {
    courseDetailData: Object,
  },
  created() {},
};
</script>

<style scoped lang="less">
@main-width: 1200px;

.course-video-detail-nav {
  margin: 20px auto;
  padding: 10px;
  text-align: left;
  width: @main-width;
  height: 188px;
  background-color: #ffffff;
  border-radius: 10px;
  p.course-detail {
    color: #000000a6;
    line-height: 16px;
  }
}
</style>
