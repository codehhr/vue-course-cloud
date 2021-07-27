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

      <!-- 登录注册入口 start -->
      <div class="signin-signup">
        <!-- 购物车 -->
        <a-icon class="shopping-cart" type="shopping-cart" />
        <!-- 分割线 -->
        <a-divider type="vertical" />
        <div class="signin-signup-entrance">
          <div>
            <a-button
              class="signin-signup-btn"
              type="primary"
              @click="showModal"
            >
              登录/注册
            </a-button>
            <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </a-modal>
          </div>
        </div>
        <!-- 头像 -->
        <a-avatar icon="user" />
      </div>
      <!-- 登录注册入口 end -->
    </div>
    <!-- 顶部上半部分 end -->

    <!-- 顶部课程导航 start -->
    <nav></nav>
    <!-- 顶部课程导航 end -->
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;

.course-header {
  margin: 0 auto;
  width: @main-width;
  height: 136px;
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

    .signin-signup {
      margin: 0 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shopping-cart {
        font-size: 20px;
        color: #999999;
      }
      .signin-signup-entrance {
        .signin-signup-btn {
          background-color: transparent;
          color: #333333;
          border: none;
          box-shadow: none;
        }
      }
    }
  }
  nav {
    height: 30px;
  }
}
</style>
<style>
.ant-input-group .ant-input {
  border-radius: 20px;
  padding: 0 20px;
}
</style>
