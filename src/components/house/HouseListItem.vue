<template>
    <a href="#">
        <b-row
            class="m-2"
            @click="selectHouse()"
            @mouseover="colorChange(true)"
            @mouseout="colorChange(false)"
            :class="{ 'mouse-over-bgcolor': isColor }"
        >
            <b-col cols="2" class="text-center align-self-center">
                <b-img
                    thumbnail
                    src="https://picsum.photos/250/250/?image=58"
                    alt="Image 1"
                ></b-img>
            </b-col>
            <b-col cols="10" class="align-self-center">
                [{{ house.aptName }}] {{ house.avgPrice }}
            </b-col>
        </b-row>
    </a>
</template>

<script>
import { mapActions } from "vuex";


const houseStore = "houseStore";

export default {
    name: "HouseListItem",
    data() {
        return {
            isColor: false,
        };
    },
    props: {
        house: Object,
    },
    methods: {
        ...mapActions(houseStore, ["detailHouse","detailHousegraph"]),
        async selectHouse() {
            console.log("AA");
            console.log(this.house);
            await this.detailHouse(this.house.aptCode);
            await this.detailHousegraph(this.house.aptCode);
            
            this.$router.push("/housedetail")
        },
        colorChange(flag) {
            this.isColor = flag;
        },
    },
};
</script>

<style scoped>
.apt {
    width: 50px;
}
.mouse-over-bgcolor {
    background-color: lightblue;
}
</style>
