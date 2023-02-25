<template>
  <div id="outer">
    <van-popup
      v-model="showPopup"
      position="bottom"
      @close="$emit('update:show', false)"
      get-container="#app"
      :style="{ height: '30%' }"
      ><div>sadasd</div></van-popup
    >
  </div>
</template>

<script>
import { Popup } from "vant";
export default {
  name: "Playlist",
  props: ["show"],
  components: {
    [Popup.name]: Popup,
  },
  data() {
    return {
      showPopup: this.show,
    };
  },
  watch: {
    show(val) {
      this.showPopup = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
