<template>
  <b-container v-if="housedeal" class="bv-example-row">
    <br>
    
    <b-row>
      <b-col
        ><h3>{{ housedeal.aptName }}</h3>
      {{ housedeal.aptCode }}</b-col>
    </b-row>
    <br>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">주소 : {{ housedeal.address }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">주변 선별진료소 : {{ housedeal.name }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">평당 가격 : {{ Math.floor(housedeal.price * 100000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</b-alert>
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
