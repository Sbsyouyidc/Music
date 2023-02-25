<template>
  <div class="outer">
    <div class="item">
      <van-button
        type="primary"
        @click="(show = true), (password = ''), (username = '')"
        >请登录</van-button
      >
      <div class="user"></div>
    </div>
    <van-popup v-model="show" :style="{ width: '90%', padding: '20px' }"
      ><van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="captcha"
          type="password"
          label="验证码"
          :rules="[{ required: true, message: '请填写密码' }]"
        /><van-button
          class="cent"
          size="small"
          @click="onCent"
          :disabled="isdis"
          >获取验证码</van-button
        >
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            :disabled="captcha == '' ? true : false"
            >提交</van-button
          >
        </div>
      </van-form></van-popup
    >
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Skeleton, Popup, Form, Field, Notify } from "vant";
export default {
  name: "userinfo",
  data() {
    return {
      show: false,
      username: "",
      captcha: "",
      isdis: false,
    };
  },
  components: {
    [Skeleton.name]: Skeleton,
    [Popup.name]: Popup,
    [Form.name]: Form,
    [Field.name]: Field,
    [Notify.Component.name]: Notify.Component,
  },
  computed: {
    ...mapState({ token: (state) => state.User.token }),
    ...mapGetters(["profile"]),
  },
  methods: {
    async onCent() {
      var timer = null;
      clearTimeout(timer);
      let res = await this.$API.sent(this.username);
      console.log(res);
      this.isdis = true;
      timer = setInterval(() => {
        this.isdis = false;
        timer = null;
      }, 6000);
    },

    async onSubmit() {
      try {
        (await this.$store.dispatch("getLogin", {
          phone: this.username,
          captcha: this.captcha,
        })) && (await this.$store.dispatch("getaccount"));
        this.show = !this.show;
      } catch (error) {
        Notify(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  text-align: center;
}
.van-popup {
  .van-field + .van-button {
    float: right;
  }
}
</style>
