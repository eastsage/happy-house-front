<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">
                <router-link :to="{ name: 'main' }">
                    <b-img
                        :src="require('@/assets/hlogo3.png')"
                        id="logo"
                        class="d-inline-block align-top"
                        alt="logo"
                    ></b-img>
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!--
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'main' }" class="link">
              <b-icon icon="house-door" animation="fade" font-scale="2"></b-icon>
              메인
            </router-link>
            <router-link :to="{ name: 'insta' }" class="m-2 link">
              <b-icon icon="instagram" animation="fade" font-scale="2"></b-icon>
              인스타그램
            </router-link>
            <router-link :to="{ name: 'board' }" class="m-2 link">
              <b-icon icon="journal" animation="fade" font-scale="2"></b-icon>
              게시판
            </router-link>
            <router-link :to="{ name: 'house' }" class="m-2 link">
              <b-icon icon="house-fill" animation="fade" font-scale="2"></b-icon>
              아파트정보
            </router-link>
            <router-link :to="{ name: 'todo' }" class="link">
              <b-icon icon="calendar-check" animation="fade" font-scale="2"></b-icon>
              TodoList
            </router-link>
            
          </b-nav-item>
          
        </b-navbar-nav>
        -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <b-icon icon="building" font-scale="2"></b-icon> 아파트
                        </template>
                        <b-dropdown-item href="#">
                            <router-link :to="{ name: 'house' }" class="link">
                                <b-icon icon="search" font-scale="1"></b-icon> 아파트 검색
                            </router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <b-icon icon="person-circle" font-scale="2"></b-icon> 회원정보
                        </template>
                        <b-dropdown-item href="#">
                            <router-link :to="{ name: 'join' }" class="link">
                                <b-icon icon="person-check" font-scale="1"></b-icon> 마이페이지
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                            <router-link :to="{ name: 'house' }" class="link">
                                <b-icon icon="house-fill" font-scale="1"></b-icon> 비밀번호 찾기
                            </router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <b-icon icon="clipboard" font-scale="2"></b-icon> 게시판
                        </template>
                        <b-dropdown-item href="#">
                            <router-link :to="{ name: 'board' }" class="link">
                                <b-icon icon="clipboard-check" font-scale="1"></b-icon> 공지 게시판
                            </router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <a href="https://github.com/eastsage/happy-house-front.git">
                        <b-icon class="mt-2" icon="github" font-scale="2"></b-icon>
                        Github
                    </a>
                </b-navbar-nav>

                <!-- after login -->
                <b-navbar-nav class="ml-auto" v-if="userInfo">
                    <b-nav-item class="align-self-center">
                        {{ userInfo.username }}님 환영합니다.
                    </b-nav-item>
                    <b-nav-item class="align-self-center">
                        <router-link :to="{ name: 'mypage' }" class="link align-self-center"
                            >내정보보기</router-link
                        >
                    </b-nav-item>
                    <b-nav-item class="align-self-center link" @click.prevent="onClickLogout"
                        >로그아웃</b-nav-item
                    >
                </b-navbar-nav>
                <!-- before login -->
                <b-navbar-nav class="ml-auto" v-else>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <b-icon icon="people" font-scale="2"></b-icon>
                        </template>
                        <b-dropdown-item href="#">
                            <router-link :to="{ name: 'join' }" class="link">
                                <b-icon icon="person-circle"></b-icon> 회원가입
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                            <router-link :to="{ name: 'login' }" class="link">
                                <b-icon icon="key"></b-icon> 로그인
                            </router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
    name: "TheHeaderNavbar",
    data() {
        return {};
    },
    computed: {
        ...mapState(memberStore, ["isLogin", "userInfo"]),
        ...mapGetters(["checkUserInfo"]),
    },
    methods: {
        ...mapActions(memberStore, ["userLogout"]),
        // ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
        onClickLogout() {
            // this.SET_IS_LOGIN(false);
            // this.SET_USER_INFO(null);
            // sessionStorage.removeItem("access-token");
            // if (this.$route.path != "/") this.$router.push({ name: "main" });
            console.log(this.userInfo.userid);
            //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
            //+ satate에 isLogin, userInfo 정보 변경)
            // this.$store.dispatch("userLogout", this.userInfo.userid);
            this.userLogout(this.userInfo.userid);
            sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
            //sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
            if (this.$route.path != "/") this.$router.push({ name: "main" });
        },
    },
};
</script>

<style scoped>
#logo {
    width: 120px;
}

.link {
    text-decoration: none;
    color: rgb(51, 172, 195);
}
</style>
