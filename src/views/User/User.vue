<template>
  <div id="User">
    <div class="userinfo"><Userinfo /></div>
    <div class="useritem"></div>
    <div class="playsons"></div>
  </div>
</template>

<script>
import Userinfo from "./userinfo.vue";
export default {
  name: "User",
  components: { Userinfo },
};
</script>

<style></style>
