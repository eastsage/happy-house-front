<template>
    <b-container class="bv-example-row mt-3">
        <b-row>
            <b-col>
                <b-alert show variant="light"><h3>공지 사항</h3></b-alert>
            </b-col>
        </b-row>
        <b-row class="mb-1">
            <b-col class="text-right">
                <div v-if="userInfo && userInfo.roles == 'ROLE_ADMIN'">
                    <b-button variant="outline-primary" @click="moveWrite()">글쓰기</b-button>
                </div>
                <div v-else>
                    <b-alert show variant="light">관리자만 글쓰기가 가능합니다.</b-alert>
                </div>
                <!-- ADMIN만 글쓰기 가능하게 바꿔야함 -->
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-table
                    striped
                    hover
                    :items="articles"
                    :fields="fields"
                    @row-clicked="viewArticle"
                >
                    <template #cell(subject)="data">
                        <router-link
                            :to="{ name: 'boardview', params: { articleno: data.item.articleno } }"
                        >
                            {{ data.item.subject }}
                        </router-link>
                    </template>
                </b-table>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { listArticle } from "@/api/board";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
    name: "BoardList",
    data() {
        return {
            articles: [],
            fields: [
                { key: "articleno", label: "글번호", tdClass: "tdClass" },
                { key: "subject", label: "제목", tdClass: "tdSubject" },
                { key: "userid", label: "작성자", tdClass: "tdClass" },
                { key: "regtime", label: "작성일", tdClass: "tdClass" },
                { key: "hit", label: "조회수", tdClass: "tdClass" },
            ],
        };
    },
    created() {
        let param = {
            pg: 1,
            spp: 20,
            key: null,
            word: null,
        };
        listArticle(
            param,
            ({ data }) => {
                this.articles = data;
            },
            (error) => {
                console.log(error);
            }
        );
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },

    methods: {
        moveWrite() {
            this.$router.push({ name: "boardwrite" });
        },
        viewArticle(article) {
            this.$router.push({
                name: "boardview",
                params: { articleno: article.articleno },
            });
        },
    },
};
</script>

<style scope>
.tdClass {
    width: 50px;
    text-align: center;
}
.tdSubject {
    width: 300px;
    text-align: left;
}
</style>
