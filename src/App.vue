<template>
  <div id="app">
    <Header />
    <router-view><keep-alive></keep-alive></router-view>
    <Footer />
  </div>
</template>
<script>
export default {
  name: "",
};
</script>
<style lang="scss">
@import "~@/assets/reset.css";
</style>
