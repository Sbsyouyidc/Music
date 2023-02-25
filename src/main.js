import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as API from "@/api";
import {
  Col,
  Row,
  Tabbar,
  TabbarItem,
  Icon,
  Image as VanImage,
  Button,
} from "vant";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

Vue.use(Button);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.config.productionTip = false;
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(VanImage);
new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$API = API;
  },
}).$mount("#app");
