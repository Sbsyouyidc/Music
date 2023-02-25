<template>
  <div class="Music">
    <audio autoplay="autoplay" ref="audio" :src="url"></audio>
    <div class="Music-option">
      <van-image width="50px" height="50px" fit="cover" :src="songPicurl" />
      <span>{{ this.songName }}</span>
      <div class="option">
        <van-icon
          v-if="!isplay"
          @click="isPlay"
          name="play-circle-o"
          size="30"
          color="#ffff"
        />
        <van-icon
          v-else
          name="pause-circle-o"
          size="30"
          color="#ffff"
          @click="isPlay"
        />
        <van-icon name="bars" size="30" color="#ffff" @click="show = true" />
        <Playlist :show.sync="show"></Playlist>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Playlist from "./Playlist.vue";
export default {
  name: "Music-option",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({ isplay: (state) => state.Music.isplay }),
    ...mapGetters(["songurl", "songPicurl", "songName"]),
    url() {
      return this.songurl.url || "";
    },
  },
  methods: {
    isPlay() {
      this.$store.commit("isplay", !this.isplay);
      let audio = this.$refs.audio;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
  },
  components: { Playlist },
};
</script>
<style lang="scss" scoped>
.Music {
  color: white;
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: rgb(99, 187, 187);
  top: -40px;
  border-radius: 20px;
  .Music-option {
    margin: {
      right: 20px;
    }
    display: flex;
    align-items: center;
    span {
      margin: {
        left: 10px;
      }
      flex: 1;
    }
  }
}
</style>
