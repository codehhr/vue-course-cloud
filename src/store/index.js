import Vue from "vue";
import Vuex from "vuex";
import { getUserInfo } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  // 全局状态
  state: {
    // 登录状态
    alreadyLogin: false,
    // 用户信息
    userInfo: null,

    loginVisible: false,

    registerVisible: false,
  },
  // 同步修改全局状态
  mutations: {
    setLoginVisible(state, payload) {
      state.loginVisible = payload;
    },
    setRegisterVisible(state, payload) {
      state.registerVisible = payload;
    },
    setUserInfoAndLoginStatus(state, payload) {
      state.alreadyLogin = payload.alreadyLogin;
      state.userInfo = payload.userInfo;
    },
  },
  actions: {
    // 检查登录状态
    checkAlreadyLogin(context) {
      getUserInfo().then((res) => {
        if (res.code === 0) {
          context.commit("setUserInfoAndLoginStatus", {
            alreadyLogin: true,
            userInfo: res.userInfo,
          });
        } else {
          context.commit("setUserInfoAndLoginStatus", {
            alreadyLogin: false,
            userInfo: null,
          });
        }
      });
    },
  },
  modules: {},
});
