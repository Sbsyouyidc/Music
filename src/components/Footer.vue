<template>
  <footer id="outer">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <Musicoption />
      <van-tabbar-item name="Home" icon="audio"
        ><router-link to="/Home">้ฆ้กต</router-link></van-tabbar-item
      >
      <van-tabbar-item name="User" icon="manager"
        ><router-link to="/User">ๆ็</router-link></van-tabbar-item
      >
    </van-tabbar>
  </footer>
</template>

<script>
import Musicoption from "./Musicoption.vue";
export default {
  name: "Footer",
  data() {
    return {
      active: "Home",
    };
  },
  components: { Musicoption },
};
</script>
