<template>
  <div class="page-outer">
    <div class="page-header">
      <!-- 顶部 start -->
      <div class="course-header-top">
        <!-- logo -->
        <img class="logo" src="../../assets/logo.png" alt="" />

        <slot name="in"></slot>

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
      <!-- 顶部 end -->
    </div>
    <slot name="out"></slot>
  </div>
</template>

<script>
import LoginRegister from "../LoginRegister";

export default {
  name: "PageHeader",

  methods: {
    // 点击搜素
    onSearch(v) {
      console.log(v);
    },
  },
  components: {
    LoginRegister,
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;

.page-outer {
  .page-header {
    margin: 0 auto;
    width: @main-width;
    height: 106px;
    // 顶部
    .course-header-top {
      padding-right: 18px;
      width: @main-width;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 180px;
        height: 55px;
      }
      .search {
        width: 33%;
        overflow: hidden;
        .input-search {
          width: 100%;
          height: 100%;
          .search-btn {
            width: 100%;
          }
        }
      }
      .course-header-top-right {
        margin-right: 40px;
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
  }
}
</style>
<style>
.ant-input-group .ant-input {
  border-radius: 20px;
  padding: 0 20px;
}
</style>
