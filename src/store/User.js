import { getLogin, getaccount } from "@/api";
import { setToken } from "@/util/token.js";
export default {
  state: {
    Userinfo: [],
    token: localStorage.getItem("token"),
  },
  getters: {
    profile(state) {
      return state.Userinfo.profile;
    },
  },
  mutations: {
    userinfo(state, payload) {
      state.Userinfo = payload || {};
    },
    token(state, payload) {
      state.token = payload || "";
    },
  },
  actions: {
    async getaccount({ commit }) {
      let res = await getaccount();
      console.log(res);
      commit("userinfo", res);
    },
    async getLogin({ commit }, { phone, captcha }) {
      let res = await getLogin(phone, captcha);
      if (res.code === 200) {
        commit("token", res.token);
        setToken(res.token);
      } else {
        throw new Error(res.message);
      }
    },
  },
  modules: {},
};
