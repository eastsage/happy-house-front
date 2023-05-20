<template>
    <b-container class="bv-example-row mt-3 text-center">
        <h3 class="underline-orange"><b-icon icon="house-fill"></b-icon> House Service</h3>
        <b-row>
            <b-col>
                <b-img alt="Happy House" :src="require('@/assets/happyhouse.png')" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <house-search-bar></house-search-bar>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="6" align="left">
                <house-list :houses="houses" />
            </b-col>
            <b-col cols="6">
                <!-- <house-detail /> -->
            </b-col>
        </b-row>
        <b-button @click="clicked()">검색!</b-button>

        <b-row class="mt-3">
            <b-col cols="12">
                <the-kakao-map :houses="houses"></the-kakao-map>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
import HouseList from "@/components/house/HouseList.vue";
// import HouseDetail from "@/components/house/HouseDetail.vue";
import TheKakaoMap from "@/components/TheKakaoMap.vue";
import { mapGetters } from "vuex";

export default {
    name: "AppHouse",
    components: {
        HouseSearchBar,
        HouseList,
        // HouseDetail,
        TheKakaoMap,
    },
    data() {
        return {
            houses: [],
        };
    },
    computed: {
        ...mapGetters(["getHouses"]),
    },
    methods: {
        clicked() {
            console.log("clicked =================");
            console.log(this);
            console.log("clicked =================");
        },
    },
    mounted() {
        this.houses = this.$store.getters["houseStore/getHouses"]; // 초기화시 houses 값을 설정해줍니다.
        this.$store.watch(
            () => this.$store.getters["houseStore/getHouses"],
            (newHouses, oldHouses) => {
                // houses 값이 변경되었을 때 실행되는 콜백 함수
                console.log("houses 값이 변경되었습니다.");
                console.log("이전 houses:", oldHouses);
                console.log("새로운 houses:", newHouses);
                this.houses = newHouses; // 변경된 값으로 houses 값을 업데이트합니다.
                // 변경된 값에 대한 추가적인 처리를 수행할 수 있습니다.
            }
        );
    },
};
</script>
<style scoped>
.underline-orange {
    display: inline-block;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(231, 149, 27, 0.3) 30%);
}
</style>
