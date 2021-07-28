<template>
  <div class="live-course">
    <slot name="live-course-title"></slot>
    <div class="live-course-content">
      <ul class="live-course-content-left">
        <li
          class="live-course-content-left-item"
          v-for="(item, index) in liveCourseList"
          :key="index"
        >
          <div
            class="cover"
            :style="
              'background: url(' +
                item.coverImgUrl +
                ') center center no-repeat'
            "
          ></div>
          <div class="mask">
            <div class="live-course-view-title">
              {{ item.title }}
            </div>
            <div class="status">
              <a-icon class="status-btn" type="check-circle" />
              <span>直播结束</span>
            </div>
            <a-button class="live-course-entrance-btn" type="primary">
              直播结束
            </a-button>
          </div>
        </li>
      </ul>
      <ul class="live-course-content-right">
        <li
          class="live-course-content-right-item"
          v-for="(item, index) in liveCourseList"
          :key="index"
        >
          <div class="bar"></div>
          <a-icon class="status-btn" type="check-circle" />
          <div class="status">直播结束</div>
          <div class="live-course-preview-title">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import live1 from "@/assets/livecourse/live1.png";
import live2 from "@/assets/livecourse/live2.png";
import live3 from "@/assets/livecourse/live3.png";
import live4 from "@/assets/livecourse/live4.jpg";
import live5 from "@/assets/livecourse/live5.png";

import $ from "jquery";

export default {
  name: "LiveCourse",
  data() {
    return {
      tabPosition: "right",
      liveCourseList: [
        {
          coverImgUrl: `${live1}`,
          title: "求职技巧之重难点问题剖析与解决",
        },
        {
          coverImgUrl: `${live2}`,
          title: "IT开发编程方向之职业规划",
        },
        {
          coverImgUrl: `${live3}`,
          title: "研究生复试之高效准备简历的方法",
        },
        {
          coverImgUrl: `${live4}`,
          title: "十大经典排序之Part-6-完结篇",
        },
        {
          coverImgUrl: `${live5}`,
          title: "jdk1.8-新特性之函数式接口与方法引用",
        },
      ],
    };
  },
  methods: {},
  created() {},
  mounted() {
    $(function() {
      // 直播课程右侧鼠标离开状态停留
      $(".live-course-content-right-item").mouseenter(function() {
        $(".live-course-content-left-item").hide();
        $(".live-course-content-left-item")
          .eq($(this).index())
          .show();

        $(this).css({
          backgroundColor: "#ffffff",
          color: "#00cf8c",
        });
        $(this)
          .children(".bar")
          .css("visibility", "visible");
        document
          .querySelectorAll(".live-course-content-right-item")
          .forEach((item) => {
            $(item).attr("lastLeave", false);
          });
      });
      $(".live-course-content-right-item").mouseleave(function() {
        $(this).css({
          backgroundColor: "#f4f4f4",
          color: "#333333",
        });
        $(this)
          .children(".bar")
          .css("visibility", "hidden");
        $(this).attr("lastLeave", true);
      });

      $(".live-course-content-right").mouseenter(function() {
        document
          .querySelectorAll(".live-course-content-right-item")
          .forEach((item) => {
            $(item).css({
              backgroundColor: "#f4f4f4",
              color: "#333333",
            });
            $(item)
              .children(".bar")
              .css("visibility", "hidden");
          });
      });

      $(".live-course-content-right").mouseleave(function() {
        document
          .querySelectorAll(".live-course-content-right-item")
          .forEach((item) => {
            if ($(item).attr("lastLeave") == "true") {
              $(item).css({
                backgroundColor: "#ffffff",
                color: "#00cf8c",
              });
              $(item)
                .children(".bar")
                .css("visibility", "visible");
            }
          });
      });
    });
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@main-color: #00cf8c;
@live-course-content-height: 350px;

.live-course {
  margin: 60px auto 20px;
  width: @main-width;
  .live-course-title {
    margin: 20px 0;
    text-align: center;
  }
  .live-course-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: @live-course-content-height;
    .live-course-content-left {
      width: 50%;
      height: 100%;
      overflow: hidden;
      .live-course-content-left-item {
        position: relative;
        height: 100%;
        .cover {
          width: 600px;
          height: 350px;
          background-size: cover !important;
        }
        .mask {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #f4f4f4;
          background-color: rgba(0, 0, 0, 0.6);
          .live-course-view-title {
            font-size: 24px;
          }
          .status {
            margin: 40px 0;
            font-size: 14px;
            .status-btn {
              margin: 0 10px;
            }
          }
          .live-course-entrance-btn {
            width: 180px;
            height: 50px;
            color: #ffffff;
            font-size: 18px;
            font-weight: 600;
            border: none;
            outline: none;
          }
        }
      }
    }
    .live-course-content-right {
      width: 50%;
      height: 100%;
      background-color: #f4f4f4;
      .live-course-content-right-item {
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 16px;
        .bar {
          margin-left: 1px;
          width: 6px;
          height: 100%;
          background-color: @main-color;
          visibility: hidden;
        }
        .status-btn {
          margin: 0 28px;
        }
        .status {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
