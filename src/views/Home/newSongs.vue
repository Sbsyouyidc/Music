<template>
  <div class="New-song">
    <div class="songs-list">
      <div
        class="songs-item"
        v-for="item in newsongs"
        :key="item.id"
        @click="isplay(item.id)"
      >
        <van-image width="70px" height="70px" fit="cover" :src="item.picUrl" />
        <ul>
          <li>
            <span>{{ item.name }}</span>
          </li>
          <li>
            <span>{{ item.song.artists[0].name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Grid, GridItem } from "vant";
export default {
  name: "newSongs",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  mounted() {
    this.$store.dispatch("getNewsong");
  },
  computed: {
    ...mapState({ newsongs: (state) => state.Home.newsongs },),
  },
  methods: {
    isplay(id) {
      console.log(id);
      this.$store.dispatch("getsongdetail", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.songs-list {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
  .songs-item {
    flex: 1;
    display: flex;
    margin: {
      right: 100px;
      left: 20px;
      bottom: 20px;
    }
    ul {
      padding: 15px;
    }
  }
  .van-image {
    border-radius: 10px;
  }
}
</style>
