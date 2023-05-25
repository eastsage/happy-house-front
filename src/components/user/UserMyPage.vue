<template>
    <b-container class="mt-4" v-if="userInfo">
        <b-row>
            <b-col></b-col>
            <b-col cols="8">
                <b-jumbotron>
                    <template #header>My Page</template>

                    <template #lead> 내 정보 확인페이지입니다. </template>

                    <hr class="my-4" />

                    <b-container class="mt-4">
                        <b-row align-h="center" class="infomation">
                            ID : {{ userInfo.username }}
                        </b-row>
                        <b-row align-h="center" class="infomation">
                            ROLE : {{ userInfo.roles }}
                        </b-row>
                    </b-container>
                </b-jumbotron>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
    name: "UserMyPage",
    components: {},
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },
    created() {
        if (this.userInfo.roles == "ROLE_CUSTOMER") this.userInfo.roles = "일반 사용자";
        else if (this.userInfo.roles == "ROLE_SELLER") this.userInfo.roles = "판매자";
        else if (this.userInfo.roles == "ROLE_ADMIN") this.userInfo.roles = "관리자";
    },
};
</script>

<style>
.infomation {
    font-size: 25px;
}
</style>
