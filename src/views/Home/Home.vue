<template>
  <div class="home">
    <main>
      <div class="swiper">
        <Swiper :list="banners" />
      </div>
      <div class="bottonitems">
        <ul>
          <li>
            <van-icon name="cart-o" size="40" color="#62e870" /><span
              >猜你想听</span
            >
          </li>
          <li><van-icon name="cart-o" size="40" color="#62e870" />每日30首</li>
          <li><van-icon name="cart-o" size="40" color="#62e870" />排行</li>
          <li><van-icon name="cart-o" size="40" color="#62e870" />分类歌单</li>
          <li><van-icon name="cart-o" size="40" color="#62e870" />新歌新碟</li>
          <li><van-icon name="cart-o" size="40" color="#62e870" />歌单</li>
        </ul>
      </div>
      <van-row type="flex">
        <van-col span="7"><h3>新歌推荐</h3></van-col>
      </van-row>
      <NewSongs />
      <van-row type="flex">
        <van-col span="7"><h3>歌单推荐</h3></van-col>
      </van-row>
      <PlayList />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Grid, GridItem } from "vant";
import Swiper from "@/components/swiper.vue";
import NewSongs from "./newSongs.vue";
import PlayList from "./playList.vue";
export default {
  name: "Home",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    Swiper,
    NewSongs,
    PlayList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["banners"]),
  },

  mounted() {
    this.$store.dispatch("gethomepage");
  },
};
</script>
<style lang="scss" scoped>
.van-row {
  margin: 15px;
}
.bottonitems,
.playlist {
  margin: 15px;
}

.bottonitems {
  width: 100%;
  margin: 0;
  margin-top: 10px;
  ul {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      text-align: center;
    }
    .van-icon {
      margin: 0 20px 5px 15px;
      display: block;
    }
  }
}
</style>
