<template>
  <div class="live-course">
    <slot name="live-course-title"></slot>
    <div class="live-course-content">
      <div class="live-course-content-left"></div>
      <div class="live-course-content-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveCourse",
  data() {
    return {
      tabPosition: "right",
      liveCourseList: [
        {
          coverImgUrl: "../assets/livecourse/live1.png",
          title: "求职技巧之重难点问题剖析与解决",
        },
        {
          coverImgUrl: "../assets/livecourse/live2.png",
          title: "求职技巧之重难点问题剖析与解决",
        },
        {
          coverImgUrl: "../assets/livecourse/live3.png",
          title: "求职技巧之重难点问题剖析与解决",
        },
        {
          coverImgUrl: "../assets/livecourse/live4.png",
          title: "求职技巧之重难点问题剖析与解决",
        },
        {
          coverImgUrl: "../assets/livecourse/live5.png",
          title: "求职技巧之重难点问题剖析与解决",
        },
      ],
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@live-course-content-height: 350px;

.live-course {
  margin: 0 auto;
  width: @main-width;
  .live-course-title {
    margin: 20px 0;
    text-align: center;
  }
  .live-course-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: @live-course-content-height;
    .live-course-content-left {
      height: 100%;
    }
    .live-course-content-right {
      height: 100%;
    }
  }
}
</style>
