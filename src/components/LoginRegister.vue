<template>
  <!-- 登录注册入口 start -->
  <div class="login-register">
    <div class="login-register-entrance">
      <!-- 购物车 -->
      <a-icon class="shopping-cart" type="shopping-cart" />
      <!-- 分割线 -->
      <a-divider type="vertical" class="divider" />
      <!-- 登录/注册 -->
      <a-dropdown v-show="userInfo.nickname" class="user-drop-menu">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          {{ userInfo.nickname }}
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="">个人中心</a>
          </a-menu-item>
          <a-menu-item>
            <a href="">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-button
        v-show="!userInfo.nickname"
        class="login-register-btn"
        type="primary"
        @click="showLoginModal"
      >
        登录 / 注册
      </a-button>
      <!-- 头像 -->
      <a-avatar
        class="avatar"
        :src="
          userInfo.avatarUrl ||
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        "
      />

      <!-- 登录 start -->
      <a-modal v-model="loginVisible" :footer="null" style="text-align:center;">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="普通登录">
            <a-form
              id="components-form-normal-login"
              :form="normalForm"
              class="login-form"
              @submit="handleLoginSubmit"
            >
              <a-form-item>
                <a-input
                  v-decorator="[
                    'username',
                    {
                      rules: [{ required: true, message: '请输入用户名' }],
                    },
                  ]"
                  placeholder="用户名"
                  autocomplete
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [{ required: true, message: '请输入密码' }],
                    },
                  ]"
                  type="password"
                  placeholder="密码"
                  autocomplete
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  登录
                </a-button>

                <div class="login-form-footer">
                  <a-button
                    class="go-to-register"
                    type="primary"
                    @click="goToRegister"
                  >
                    立即注册
                  </a-button>
                  <a class="login-form-forgot" href="">
                    忘记密码?
                  </a>
                </div>
              </a-form-item>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="2" tab="手机登录">
            <a-form
              id="components-form-tel-login"
              :form="telForm"
              class="login-form"
              @submit="handleSubmitWithTel"
            >
              <a-form-item>
                <a-input
                  v-decorator="[
                    'username',
                    {
                      rules: [{ required: true, message: '请输入用户名' }],
                    },
                  ]"
                  placeholder="用户名"
                  autocomplete
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [{ required: true, message: '请输入验证码' }],
                    },
                  ]"
                  type="text"
                  placeholder="验证码"
                  autocomplete
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  登录
                </a-button>

                <div class="login-form-footer">
                  <a-button
                    class="go-to-register"
                    type="primary"
                    @click="goToRegister"
                  >
                    立即注册
                  </a-button>
                </div>
              </a-form-item>
            </a-form>
          </a-tab-pane>
        </a-tabs>
      </a-modal>
      <!-- 登录 end -->

      <!-- 注册 start -->
      <a-modal
        v-model="registerVisible"
        :footer="null"
        title="注 册"
        style="text-align:center;"
      >
        <a-form :form="registerForm" @submit="handleRegisterSubmit">
          <a-form-item v-bind="formItemLayout" label="帐号">
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [{ required: true, message: '请输入用户名' }],
                },
              ]"
              placeholder="请输入账号(6-20位，非纯数字)!"
              autocomplete
            >
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入你的密码(6-20位，非汉字)!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                },
              ]"
              placeholder="请输入你的密码(6-20位，非汉字)!"
              typeautocomplete="password"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: '请再次输入你的密码!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              autocomplete
              placeholder="请再次输入你的密码"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <span slot="label">
              昵称&nbsp;
              <a-tooltip title="其他人会看到这个名字">
                <a-icon type="question-circle-o" />
              </a-tooltip>
            </span>
            <a-input
              v-decorator="[
                'nickname',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入你的昵称!',
                      whitespace: true,
                    },
                  ],
                },
              ]"
              autocomplete
              placeholder="请输入你的昵称"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="手机号码">
            <a-input
              v-decorator="[
                'mobile',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入你的手机号!',
                    },
                  ],
                },
              ]"
              autocomplete
              placeholder="请输入你的手机号"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['prefix', { initialValue: '86' }]"
                style="width: 70px;"
              >
                <a-select-option value="86">
                  +86
                </a-select-option>
                <a-select-option value="87">
                  +87
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="验证码">
            <a-row :gutter="8">
              <a-col :span="12">
                <a-input
                  v-decorator="[
                    'code',
                    {
                      rules: [
                        {
                          required: true,
                          message: '请输入验证码!',
                        },
                      ],
                    },
                  ]"
                  autocomplete
                  placeholder="请输入验证码!"
                />
              </a-col>
              <a-col :span="12">
                <a-button class="get-code" @click="getCode"
                  >获取验证码</a-button
                >
              </a-col>
            </a-row>
          </a-form-item>
          <a-button class="register" type="primary" html-type="submit">
            注册
          </a-button>
          <a-button class="go-to-login" type="primary" @click="goToLogin">
            去登录
          </a-button>
        </a-form>
      </a-modal>
      <!-- 注册 end -->
    </div>
  </div>
  <!-- 登录注册入口 end -->
</template>

<script>
import { login } from "../api/api";
// register

export default {
  name: "LoginRegister",
  data() {
    return {
      loginVisible: false,
      registerVisible: false,
      userInfo: {},
      // 注册 start
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      // 注册 end
    };
  },
  methods: {
    showLoginModal() {
      this.loginVisible = true;
    },
    goToLogin() {
      this.registerVisible = false;
      this.loginVisible = true;
    },
    goToRegister() {
      this.loginVisible = false;
      this.registerVisible = true;
    },
    // 普通登录
    // 点击登录
    handleLoginSubmit(e) {
      e.preventDefault();
      this.normalForm.validateFields((err, values) => {
        if (!err) {
          login(values.username, values.password).then((res) => {
            if (res.code == 0) {
              this.userInfo = res.userInfo;
              console.log(this.userInfo);
              this.visible = false;
            } else {
              this.$message.warning("帐号或密码不正确");
            }
          });
        } else {
          return;
        }
      });
    },
    // 手机登录
    handleSubmitWithTel(e) {
      e.preventDefault();
      this.telForm.validateFields((err, values) => {
        if (!err) {
          login(values.username, values.password).then((res) => {
            if (res.code == 0) {
              this.userInfo = res.userInfo;
              console.log(this.userInfo);
              this.visible = false;
            } else {
              this.$message.warning("帐号或密码不正确");
            }
          });
        } else {
          return;
        }
      });
    },

    // 注册 start
    handleRegisterSubmit(e) {
      e.preventDefault();
      this.registerForm.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.$message.warning("帐号或密码不正确");
          console.log(values);
          // register();
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.registerForm;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.registerForm;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    // 注册 end

    // 获取验证码
    getCode() {},
  },
  beforeCreate() {
    this.normalForm = this.$form.createForm(this, { name: "normal_login" });
    this.telForm = this.$form.createForm(this, { name: "normal_login" });
    this.registerForm = this.$form.createForm(this, { name: "register" });
  },
};
</script>

<style scoped lang="less">
.login-register {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .login-register-entrance {
    .divider {
      margin-left: 10px;
    }
    .login-register-btn {
      padding: 0;
      width: 90px;
      background-color: transparent;
      color: #333333;
      border: none;
      box-shadow: none;
    }
    .user-drop-menu {
      width: 90px;
      color: #000000;
    }
  }
}

.login-form-button {
  width: 100%;
  height: 36px;
}
.login-form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<style lang="less">
@main-color: #00cf8c;

.avatar {
  margin: 0 10px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.ant-modal {
  padding: 0 !important;
  width: 400px !important;
  .ant-modal-content {
    overflow: hidden;
    .ant-modal-body {
      padding: 10px 40px 0 !important;
      .go-to-register,
      .go-to-login {
        color: #000000a6;
        background-color: transparent;
        border: none;
        box-shadow: none;
        &:hover {
          color: @main-color;
        }
      }
      .ant-input-group .ant-input {
        border-radius: 0;
      }
      .register {
        width: 100%;
      }
      .go-to-login {
        margin: 10px;
        float: right;
      }
    }
  }
}
</style>
