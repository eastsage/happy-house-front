<template>
  <b-container v-if="housedeal" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ housedeal.aptCode }}</h3></b-col
      >
    </b-row>
    <b-row class="mb-2 mt-1">
      <b-col><b-img :src="require('@/assets/apt.png')" fluid-grow></b-img></b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">aptName : {{ housedeal.aptName }}</b-alert>
      </b-col>
    </b-row>
    
    
    
    
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseDetail",
  computed: {
    ...mapState(houseStore, ["housedeal"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
