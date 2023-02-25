import Vue from "vue";
import Vuex from "vuex";
import Home from "./Home";
import User from "./User";
import Music from './Music'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Home,
    User,
    Music
  },
});
