<template>
  <div class="playList">
    <div class="Persona-list">
      <div
        class="Persona-item"
        v-for="(item, index) in personalized"
        :key="index"
      >
        <van-image
          width="100px"
          height="100px"
          fit="cover"
          :src="item.picUrl"
        />
        <ul class="clearfix">
          <li>
            <span class="van-multi-ellipsis--l2">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "playList",
  data() {
    return {};
  },
  computed: {
    ...mapState({ personalized: (state) => state.Home.personalized }),
  },
  mounted() {
    this.$store.dispatch("getPersonalized");
  },
};
</script>

<style lang="scss" scoped>
.Persona-list {
    margin-bottom: 10px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
  .Persona-item {
    width: 100px;
    margin: {
      left: 20px;
      bottom: 10px;
    }
  }
}
</style>
