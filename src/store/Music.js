import { reqSongurl, reqSongdetail } from "@/api";
export default {
  state: {
    isplay: false,
    //播放列表
    songlist: [],
    //正在播放的歌曲信息
    songdetail: [],
    //正在播放歌曲url
    nowplay: {},
  },
  getters: {
    profile(state) {
      return state.Userinfo.profile;
    },
    songurl(state) {
      return state.nowplay;
    },
    songPicurl(state) {
      return state.songdetail?.al.picUrl || {};
    },
    songName(state) {
      return state.songdetail.name || {};
    },
  },
  mutations: {
    isplay(state, payload) {
      console.log(payload);
      state.isplay = payload;
    },
    nowplay(state, payload) {
      state.nowplay = payload;
    },
    songdetail(state, payload) {
      state.songdetail = payload;
    },
  },
  actions: {
    async getsongurl({ commit }, id) {
      let res = await reqSongurl(id);
      console.log(res);
      if (res.code === 200) {
        commit("isplay", true);
        commit("nowplay", res.data[0]);
      }
    },
    async getsongdetail({ commit, dispatch }, id) {
      let res = await reqSongdetail(id);
      if (res.code === 200) {
        commit("songdetail", res.songs[0]);
        dispatch("getsongurl", res.songs[0].id);
      }
    },
  },
  modules: {},
};
