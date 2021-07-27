<template>
  <div class="course-header">
    <!-- 顶部上半部分 start -->
    <div class="course-header-top">
      <!-- logo -->
      <img class="logo" src="../assets/logo.png" alt="" />
      <!-- 搜索框 start -->
      <div class="search">
        <a-input-search
          class="input-search"
          placeholder="搜索课程"
          size="large"
          @search="onSearch"
        >
          <a-button
            slot="enterButton"
            class="search-btn"
            shape="round"
            type="primary"
            icon="search"
          >
            搜索
          </a-button>
        </a-input-search>
      </div>
      <!-- 搜索框 end -->
      <div class="course-header-top-right">
        <!-- 购物车 -->
        <a-icon class="shopping-cart" type="shopping-cart" />
        <!-- 分割线 -->
        <a-divider type="vertical" />
        <!-- 登录/注册 -->
        <login-register></login-register>
        <!-- 头像 -->
        <a-avatar icon="user" />
      </div>
    </div>
    <!-- 顶部上半部分 end -->

    <!-- 顶部课程导航 start -->
    <nav>
      <router-link class="index" to="/">首页</router-link>
      <!-- 课程分类 start -->
      <a-dropdown>
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
import LoginRegister from "./LoginRegister";

export default {
  name: "PageHeader",
  data() {
    return {
      topicList: [],
      topicListApi: "/weChat/applet/subject/list",
    };
  },
  methods: {
    // 点击搜素
    onSearch(v) {
      console.log(v);
    },

    // 获取专题列表
    getTopicList() {
      this.$axios
        .post(`${this.$domain}${this.topicListApi}`, { enable: 1 })
        .then((res) => {
          if (res.data.code == 0) {
            this.topicList = res.data.rows;
          } else {
            console.log("getTopicList erroe");
          }
        });
    },
  },
  created() {
    this.getTopicList();
  },
  components: {
    LoginRegister,
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@main-color: #00cf8c;

.course-header {
  margin: 0 auto;
  width: @main-width;
  height: 136px;
  // 顶部上半部分
  .course-header-top {
    padding-right: 18px;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 180px;
      height: 55px;
    }
    .search {
      width: 32%;
      .input-search {
        width: 100%;
        .search-btn {
          width: 100%;
          height: 40px;
        }
      }
    }
    .course-header-top-right {
      margin-right: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .shopping-cart {
        font-size: 20px;
        color: #999999;
      }
    }
  }
  // 顶部下半部分
  nav {
    margin: 0 auto;
    width: @main-width;
    text-align: left;
    height: 30px;
    line-height: 30px;
    a {
      color: #000000;
      margin-right: 20px;
    }
    a.index {
      position: relative;
      color: @main-color;
      &::before {
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        width: 80%;
        height: 2px;
        background-color: @main-color;
      }
    }
  }
}
</style>
<style>
.ant-input-group .ant-input {
  border-radius: 20px;
  padding: 0 20px;
}
</style>
