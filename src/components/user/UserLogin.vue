<template>
  <b-container class="bv-example-row mt-3">
    <h3 class="underline-steelblue"><b-icon icon="key"></b-icon> 로그인</h3>
    <b-row>
      <b-col></b-col>
      <b-col cols="6">
        <div>
      <b-card
    text-variant="black"
    
  >
  <img src = "@/assets/hlogo3.png" width="40%">
  
    <b-card-text>
      
    </b-card-text>
    <b-card-text class="font-weight-bold">
       간편하게 로그인하고 다양한 서비스를 이용하세요.
    </b-card-text>
  
        <!-- <b-card img-src="../../../assets/hlogo3.png" align="center">
        </b-card> -->
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-alert show variant="danger" v-if="isLoginError">아이디 또는 비밀번호를 확인하세요.</b-alert>
            <b-form-group label="아이디:" label-for="userid" class="font-weight-bold">
              <b-form-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호:" label-for="userpwd" class="font-weight-bold">
              <b-form-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                placeholder="비밀번호 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <div class="col text-center">
            <b-button type="button" pill variant="outline-info" class="m-1" @click="confirm">로그인</b-button>
            <b-button type="button" pill variant="outline-secondary" class="m-1" @click="movePage">회원가입</b-button>
            </div>
            <div class="col text-center">
            <a @click="movePage">비밀번호 찾기</a>
            </div>
          </b-form>
        </b-card>
        </b-card>
</div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserLogin",
  data() {
    return {
      // isLoginError: false,
      user: {
        userid: null,
        userpwd: null,
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },
    movePage() {
      this.$router.push({ name: "join" });
    },
  },
};
</script>

<style>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
  font-weight: bold;
}
</style>
