import axios from "./http";

// 单独管理接口

// 获取专题列表
export function requestTopicList() {
  return axios.post("/api/weChat/applet/subject/list", { enable: 1 });
}

//获取轮播图
export function requestSlide(number) {
  return axios.get(`/api/weChat/applet/course/banner/list?number=${number}`);
}

//请求课程数据
export function requestCourseList(type, pageSize, pageNum = 1) {
  // let formData = new URLSearchParams()
  let formData = new FormData();
  formData.append("type", type);
  formData.append("pageSize", pageSize);
  formData.append("pageNum", pageNum);
  return axios.post(`/api/weChat/applet/course/list/type`, formData);
}

// 获取友情链接
export function requestFriendsLink() {
  let formData = new FormData();
  formData.append("dictType", "blogroll");
  formData.append("pageNum", 1);
  formData.append("pageSize", 10);
  formData.append("orderByColumn", "dictSort");
  formData.append("isAsc", "asc");
  return axios.post("/api/system/dict/data/list/open", formData);
}

// 获取课程点击后的详情数据
export function requestCourseDetailData(courseId) {
  return axios.get(`/api/pc/course/detail/${courseId}`);
}

// 帐号密码登录
export function login(username, password) {
  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("rememberMe", true);
  return axios.post(`/api/pcUser/login`, formData);
}

// 注册时发送验证码
export function getCode(mobile) {
  return axios.get(`/api/pcUser/register/send/code/${mobile}`);
}

// 注册
export function register(loginName, password, nickname, mobile, code) {
  let formData = new FormData();
  formData.append("loginName", loginName);
  formData.append("password", password);
  formData.append("nickname", nickname);
  formData.append("mobile", mobile);
  formData.append("code", code);
  return axios.post(`/api/pcUser/register`, formData);
}

// 查看登录用户个人信息
export function getUserInfo() {
  return axios.get("/api/pcUser/login-user/info");
}
//查看登录用户个人信息
export function logout() {
  return axios.get("/courseapi/pcUser/logout");
}
//更改头像
export function changeUserAvatar(file) {
  let formData = new FormData();
  formData.append("file", file);
  return axios.post("/courseapi/pcUser/updata/userAvatar", formData);
}
