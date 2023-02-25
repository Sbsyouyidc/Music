import { getHomepage, reqNewsong, reqPersonalized } from "@/api";
export default {
  state: {
    banners: [],
    newsongs: [],
    personalized: [],
  },
  getters: {
    banners(state) {
      return state.banners;
    },
  },
  mutations: {
    banners(state, payload) {
      state.banners = payload;
    },
    newSongs(state, payload) {
      state.newsongs = payload;
    },
    personalized(state, payload) {
      state.personalized = payload;
    },
  },
  actions: {
    async gethomepage({ commit }) {
      let res = await getHomepage();
      console.log(res);
      if (res.code === 200) {
        commit("banners", res.banners);
      } else {
        throw new Error(res.code);
      }
    },
    async getNewsong({ commit }) {
      let res = await reqNewsong();
      console.log(res);
      if (res.code === 200) {
        commit("newSongs", res.result);
      } else {
        throw new Error(res.code);
      }
    },
    async getPersonalized({ commit }) {
      let res = await reqPersonalized();
      console.log(res);
      if (res.code === 200) {
        commit("personalized", res.result);
      } else {
        throw new Error(res.code);
      }
    },
  },
  modules: {},
};
