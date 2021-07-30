<template>
  <div class="course-video-detail-nav">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="课程描述">
        <p class="course-detail" v-html="courseDetailData.courseDetail"></p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="目录">
        <ul class="sections">
          <li v-for="(item, index) in courseDetailData.sections" :key="index">
            <div class="section-name">
              <span
                v-html="index + 1 < 10 ? '0' + (index + 1) : index + 1"
              ></span
              >. {{ item.sectionName }}
            </div>
            <ul class="sub-sections">
              <li
                v-for="(subItem, subIndex) in item.subSections"
                :key="subIndex"
                class="sub-section-li"
              >
                <div class="sub-section-name">
                  {{ index + 1 }}-{{ subIndex + 1 }} {{ subItem.sectionName }}
                </div>
                <div class="play">
                  <a-icon class="play-icon" type="play-circle" />
                  <span style="display:none;">观看</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </a-tab-pane>
      <a-tab-pane key="3" tab="评论">
        评论
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "CourseVideoDetailNav",
  data() {
    return {
      sections: [],
    };
  },
  props: {
    courseDetailData: Object,
  },
  methods: {},
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@main-color: #00cf8c;

.course-video-detail-nav {
  margin: 20px auto;
  padding: 10px;
  text-align: left;
  width: @main-width;
  background-color: #ffffff;
  border-radius: 10px;
  p.course-detail {
    color: #000000a6;
    line-height: 16px;
  }
  .sections {
    padding: 20px 40px;
    .section-name {
      font-size: 22px;
      color: #000000d9;
    }
    .sub-sections {
      .sub-section-li {
        margin: 14px 0;
        padding: 0 20px;
        line-height: 50px;
        height: 50px;
        background-color: #f2f2f2;
        display: flex;
        align-content: center;
        justify-content: space-between;
        &:hover {
          color: @main-color;
        }
        .sub-section-name {
          font-size: 14px;
        }
        .play {
          text-align: center;
          width: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
