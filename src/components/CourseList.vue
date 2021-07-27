<template>
  <div class="course">
    <slot name="course-title"></slot>
    <div class="course-list">
      <div
        class="course-list-item"
        v-for="(item, index) in courseList"
        :key="index"
      >
        <!-- <router-link tag="div" :to="item.courseId"> -->
        <!-- coverFileUrl start -->
        <div class="coverFileUrl">
          <img :src="item.coverFileUrl" alt="" />
        </div>
        <!-- coverFileUrl end -->
        <p class="courseTitle">{{ item.courseTitle }}</p>
        <p class="dec">
          共 {{ item.subSectionNum }} 节课 |
          {{ item.participationsCount }} 人报名
        </p>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  data() {
    return {
      courseApi: "http://wkt.myhope365.com/weChat/applet/course/list/type",
      courseList: [
        // example
        {
          params: {},
          courseId: 141,
          courseTitle: "vue全家桶从入门到实战",
          courseSubtitle: "vue全家桶从入门到实战",
          courseDetail:
            "<p>&nbsp; &nbsp; &nbsp; &nbsp; 随着移动互联网趋势日益明显，前后端分离开发模式受到越来越多公司和工程师的欢迎，web前端与移动开发技术得到大范围的应用和推广，使得该项技术成为当下的追逐小热潮。</p><p>&nbsp; &nbsp; &nbsp; &nbsp; vue全家桶是目前web前端最常用、好评率最高的开发框架之一，是提高开发效率、体现开发水平的利器，故学好vue全家桶组件至关重要，是升职加薪的关键所在。</p><p>&nbsp; &nbsp; &nbsp; &nbsp;视频中相关代码资源，请加资料领取吕老师的QQ：577405209</p>",
          isFree: "1",
          coursePrice: 99.99,
          isDiscount: "1",
          discountDesc: "限时钜惠",
          discountPrice: 1000,
          participationsCount: 23,
          orderBy: 201,
          createdTime: "2020-05-02 11:53:12",
          courseType: "0",
          isOpen: "1",
          bannerFileUrlPc:
            "https://online-course.nos-eastchina1.126.net/vue全家桶-1256431492473552896.jpg",
          sections: [],
          bannerFileUrl:
            "https://online-course.nos-eastchina1.126.net/vue全家桶-1256431472215064576.jpg",
          coverFileUrl:
            "https://online-course.nos-eastchina1.126.net/vue全家桶 拷贝-1256431449452576768.jpg",
          learningNum: 14,
          subSectionNum: "69",
          payPrice: 0,
        },
      ],
    };
  },
  props: {
    type: String,
    pageSize: {
      type: String,
      default: "5",
    },
    pageNum: {
      type: String,
      default: "1",
    },
  },
  methods: {
    getCourseList() {
      let formData = new FormData();
      formData.append("type", this.type);
      formData.append("pageNum", this.pageNum);
      formData.append("pageSize", this.pageSize);
      this.$axios.post(this.courseApi, formData).then((res) => {
        this.courseList = res.data.rows;
      });
    },
  },
  created() {
    this.getCourseList();
  },
};
</script>

<style scoped lang="less">
.course {
  .course-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    .course-list-item {
      margin: 0 4px;
      width: 232px;
      height: 204px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .coverFileUrl {
        height: 122px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: all 0.6s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
