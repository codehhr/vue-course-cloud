<template>
  <div class="personal-page">
    <!-- page-header start -->
    <page-header>
      <template v-slot:in>
        <div>
          <header-nav></header-nav>
        </div>
      </template>
    </page-header>
    <!-- page-header end -->

    <div class="personal-container">
      <a-tabs default-active-key="1" tab-position="left">
        <a-tab-pane key="1" tab="我的主页">
          <div class="personal-center-title">个人信息</div>
          <div class="personal-center-content">
            <!-- 昵称 start -->
            <div class="userinfo-item nickname">
              <span>昵称</span>
              <a class="change-userinfo" @click="showModal"> 修改 </a>
              <p>
                {{ userInfo ? userInfo.nickname : "nickname" }}
              </p>
              <a-modal
                class="nickname-modal"
                v-model="visible"
                title="修改昵称"
                @ok="changeNickname"
              >
                <a-input class="new-nickname" placeholder="请输入新昵称!" />
              </a-modal>
            </div>
            <!-- 昵称 end -->
            <a-divider />

            <!-- 手机号 start -->
            <div class="userinfo-item mobile">
              <span>手机号</span>
              <a class="change-userinfo" @click="showModal"> 修改 </a>
              <p>
                {{ userInfo ? userInfo.mobile : "mobile" }}
              </p>
              <a-modal
                class="nickname-modal"
                v-model="visible"
                title="修改手机号码"
                @ok="changeMobile"
              >
                <a-input class="new-nickname" placeholder="请输入新昵称!" />
              </a-modal>
            </div>
            <!-- 手机号 end -->
            <a-divider />

            <!-- 密码 start -->
            <div class="userinfo-item password">
              <span>密码</span>
              <a class="change-userinfo" @click="showModal"> 修改 </a>
              <p>******</p>
              <a-modal
                class="nickname-modal"
                v-model="visible"
                title="修改密码码"
                @ok="changeMobile"
              >
                <a-input class="password" placeholder="请输入新昵称!" />
              </a-modal>
            </div>
            <!-- 密码 end -->
            <a-divider />

            <!-- 头像 start -->
            <div class="userinfo-item change-avatar">
              <div
                class="large-avatar"
                :style="
                  `background: url('${
                    userInfo ? userInfo.avatarUrl : ''
                  }') center center no-repeat`
                "
              ></div>

              <!-- 头像上传 start -->
              <a-upload
                name="file"
                action="/api/pcUser/updata/userAvatar"
                :headers="headers"
                @change="handleChange"
                :showUploadList="false"
              >
                <div class="upload">
                  <a-button class="upload-btn">
                    <a-icon class="upload-icon" type="upload" />
                    <span>更改头像</span>
                  </a-button>
                </div>
              </a-upload>
              <!-- 头像上传 end -->
            </div>
            <!-- 头像 end -->
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="我的课程">
          <h1>我的课程</h1>
        </a-tab-pane>
        <a-tab-pane key="3" tab="我的订单">
          <h1>我的订单</h1>
        </a-tab-pane>
      </a-tabs>
    </div>

    <!-- page-footer start -->
    <page-footer></page-footer>
    <!-- page-header end -->
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader/PageHeader";
import HeaderNav from "../components/PageHeader/HeaderNav";
import PageFooter from "../components/PageFooter";
import { mapState } from "vuex";

export default {
  name: "PersonalCenter",
  data() {
    return {
      visible: false,
      headers: {
        authorization: "authorization-text",
      },
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    // 修改昵称
    changeNickname(e) {
      console.log(e);
      this.visible = false;
    },
    // 修改手机号
    changeMobile(e) {
      console.log(e);
      this.visible = false;
    },
    // 更改头像
    handleChange(info) {
      if (this.$store.state.alreadyLogin) {
        // if (info.file.status !== "uploading") {
        //   console.log(info.file, info.fileList);
        // }
        if (info.file.status === "done") {
          this.$message.success(`${info.file.name} 上传成功`);
          this.$store.dispatch("checkAlreadyLogin");
        } else if (info.file.status === "error") {
          this.$message.error(`${info.file.name} 头像上传失败`);
        }
      } else {
        this.$message.warning("请登录");
      }
    },
  },
  components: {
    PageHeader,
    HeaderNav,
    PageFooter,
  },
  computed: {
    ...mapState({
      userInfo: "userInfo",
    }),
  },
};
</script>

<style lang="less">
@main-width: 1200px;
@main-bg-color: #f4f4f4;
@main-color: #00cf8c;

.personal-page {
  min-height: 100vh;
  background-color: @main-bg-color;

  .page-outer {
    height: 80px;
    background-color: #ffffff;

    .page-header {
      height: 100%;

      .course-header-top {
        display: flex;
        height: 100%;

        a.index {
          color: #000000;

          &::before {
            background-color: transparent;
          }
        }
      }
    }
  }

  .personal-container {
    margin: 24px auto;
    padding: 20px 20px;
    text-align: left;
    width: @main-width;
    border-radius: 4px;
    background-color: #ffffff;

    .personal-center-title {
      margin-bottom: 20px;
      font-size: 1.6rem;
    }

    .personal-center-content {
      padding: 40px;

      .userinfo-item {
        span {
          color: #333333;
          font-size: 1.4rem;
        }

        p {
          margin: 10px 0;
          font-size: 1.4rem;
        }

        .change-userinfo {
          margin: 0 10px;
        }

        .large-avatar {
          width: 200px;
          height: 200px;
          background-size: cover !important;
        }

        .upload {
          width: 200px;
          font-size: 0.8rem;

          &:hover {
            span {
              color: @main-color;
            }
          }

          .upload-btn {
            position: relative;
            left: -10px;
            margin: 10px auto;
            display: block;
          }

          span {
            font-size: 0.8rem;
            transition: color 0.4s;
          }
        }
      }
    }
  }
}

.nickname-modal {
  .ant-modal .ant-modal-content .ant-modal-body {
    padding: 20px;
  }

  .new-nickname {
    margin: 0;
  }
}
</style>
