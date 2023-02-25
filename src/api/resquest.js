import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";
//1、对axios二次封装
const requests = axios.create({
  //基础路径，requests发出的请求在端口号后面会跟改baseURl
  ///api为开发环境的基本路径
  baseURL: "/api",
  timeout: 5000,
});
//2、配置请求拦截器
requests.interceptors.request.use((config) => {
  //config内主要是对请求头Header配置
  //比如添加token
  // console.log(requests.orgin);
  // if (localStorage.getItem("uuid")) {
  //   config.headers.userTempId = localStorage.getItem("uuid");
  // }
  // if (store.state.user.token) {
  //   config.headers.token = store.state.user.token;
  // }
  nProgress.start();
  return config;
});
//3、配置响应拦截器
requests.interceptors.response.use(
  (res) => {
    //成功的回调函数
    nProgress.done();
    return res.data;
  },
  (error) => {
    //失败的回调函数
    console.log("响应失败" + error);
    return Promise.reject(new Error("fail"));
  }
);
async function get(url) {
  try {
    return await requests({
      url: url,
      method: "get",
      timeout: 3000,
    });
  } catch (error) {
    console.log(error);
  }
}
async function post(url, params) {
  return await requests({
    url: url,
    data: params,
    method: "post",
    timeout: 3000,
  });
}
async function Delete(url, params = null) {
  return await requests({
    url: url,
    method: "delete",
    params: params,
    timeout: 3000,
  });
}
export default { get, post, Delete };
