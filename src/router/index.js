import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { reqguester } from "@/api";
const Home = () => import("@/views/Home/Home.vue");
const User = () => import("@/views/User/User.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/User",
    name: "User",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//路由守卫
router.beforeEach(async (_to, _from, next) => {
  let token = store.state.User.token;
  if (!token) {
    await reqguester();
    next();
  } else {
    next();
  }
});
export default router;
