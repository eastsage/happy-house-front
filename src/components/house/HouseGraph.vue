<template>
    <b-container v-if="housegraph" class="bv-example-row">
        
      
      <b-row class="mb-2 mt-1">
        <b-col><b-img :src="require('@/assets/apt.png')" fluid-grow></b-img></b-col>
      </b-row>
      <b-row>
        
      </b-row>
      <line-chart></line-chart>
      
    
      
      
    </b-container>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import LineChart from "@/service/graph.js";

  const houseStore = "houseStore";
  console.log(houseStore);
  
  export default {
    name: "HouseGraphView",
      components: {
        LineChart
    },
      data() {
            return {
           
        }
    },
     created() {
        console.log(this.housegraph);    
    },
      mounted() {
            
    },
    computed: {
          ...mapState(houseStore, ["housegraph"]),
          
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
  