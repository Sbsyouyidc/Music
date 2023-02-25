<template>
  <header>
    <van-row type="flex">
      <van-col span="7" v-if="$route.path == '/Home'"><h1>音乐</h1></van-col>
      <van-col span="7" v-else><h1>我的</h1></van-col>
    </van-row>
    <van-row type="flex">
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词"
    /></van-row>
  </header>
</template>

<script>
import { Search } from "vant";
export default {
  name: "Header",
  components: {
    [Search.name]: Search,
  },

  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.van-row {
  margin: 15px;
}
.van-search {
  width: 100%;
}
</style>
