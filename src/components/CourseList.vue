<template>
  <div class="course">
    <!-- 课程标题 -->
    <div class="course-title">
      <div></div>
      <slot name="course-title"></slot>
      <router-link to="/" class="more">
        <span>更多 </span>
        <a-icon type="right-circle" />
      </router-link>
    </div>
    <!-- 课程列表 -->
    <div class="course-list">
      <div
        class="course-list-item"
        v-for="(item, index) in courseList"
        :key="index"
      >
        <router-link
          :to="{ name: 'CourseDetail', params: { id: item.courseId } }"
        >
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
          <p class="free-course" v-if="item.isFree == 1">免费</p>
          <p class="discount-course" v-else>
            <span class="discount-price">{{ item.discountPrice }}</span>
            <span class="course-price">{{ item.coursePrice }}</span>
            <a-tag class="discount-desc" color="orange">
              {{ item.discountDesc }}
            </a-tag>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  data() {
    return {
      courseApi: `${this.$domain}/weChat/applet/course/list/type`,
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
      this.$axios
        .post(this.courseApi, formData)
        .then((res) => {
          this.courseList = res.data.rows;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getCourseList();
  },
};
</script>

<style scoped lang="less">
@main-color: #00cf8c;
@course-list-item-width: 224px;
@course-list-item-height: 204px;
@course-list-item-p-course-title-color: #000000;
@course-list-item-p-free-course-font-size: 16px;
@discount-price-color: #ff4500;

.course {
  .course-title {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e8e8e8;
    .more {
      color: #999999;
    }
  }
  .course-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    .course-list-item {
      margin: 0 8px;
      width: @course-list-item-width;
      height: @course-list-item-height;
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
      p {
        margin: 3px 0;
        color: #888888;
        text-align: left;
      }
      p.courseTitle {
        color: @course-list-item-p-course-title-color;
      }
      p.free-course {
        color: @main-color;
        font-size: @course-list-item-p-free-course-font-size;
      }
      p.discount-course {
        overflow: hidden;
        .discount-price {
          margin-right: 4px;
          color: @discount-price-color;
          font-weight: 500;
        }
        .course-price {
          text-decoration: line-through;
          font-size: 12px;
        }
        .discount-desc {
          float: right;
        }
      }
    }
  }
}
</style>
