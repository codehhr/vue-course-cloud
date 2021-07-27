<template>
  <!-- 登录注册入口 start -->
  <div class="login-register">
    <div class="login-register-entrance">
      <a-button class="login-register-btn" type="primary" @click="showModal">
        登录/注册
      </a-button>
      <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
  <!-- 登录注册入口 end -->
</template>

<script>
export default {
  name: "LoginRegister",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    // 登录点击 OK
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
.login-register {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .login-register-entrance {
    .login-register-btn {
      background-color: transparent;
      color: #333333;
      border: none;
      box-shadow: none;
    }
  }
}
</style>
