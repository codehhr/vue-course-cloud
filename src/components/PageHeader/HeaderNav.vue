<template>
  <div>
    <!-- 顶部课程导航 start -->
    <nav>
      <router-link class="index" to="/">首页</router-link>
      <!-- 课程分类 start -->
      <a-dropdown class="dropdown">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          课程分类 <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item v-for="(item, index) in topicList" :key="index">
            <a href="">{{ item.title }}</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <router-link to="/ExclusiveCourse">专属课程</router-link>
      <!-- 课程分类 end -->
    </nav>
    <!-- 顶部课程导航 end -->
  </div>
</template>

<script>
import { requestTopicList } from "../../api/api";

export default {
  name: "HeaderNav",
  data() {
    return {
      topicList: [],
    };
  },
  methods: {
    // 获取专题列表
    getTopicList() {
      requestTopicList()
        .then((res) => {
          if (res.code == 0) {
            this.topicList = res.rows;
          } else {
            console.log("getTopicList error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getTopicList();
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@main-color: #00cf8c;

nav {
  margin: 0 auto;
  width: @main-width;
  text-align: left;
  height: 30px;
  line-height: 26px;
  a {
    color: #000000;
    margin-right: 28px;
  }
  a.index {
    position: relative;
    color: @main-color;
    &::before {
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 80%;
      height: 2px;
      background-color: @main-color;
    }
  }
  a.dropdown {
    &:hover {
      color: @main-color;
    }
  }
}
</style>
