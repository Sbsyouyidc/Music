<template>
  <van-swipe class="my-swipe" :autoplay="3000">
    <van-swipe-item v-for="(item, index) in list" :key="index"
      ><van-image :src="item.imageUrl" fit="contain"
    /></van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "swiper",
  components: { [Swipe.name]: Swipe, [SwipeItem.name]: SwipeItem },
  props: ["list"],
};
</script>

<style lang="scss" scoped></style>
