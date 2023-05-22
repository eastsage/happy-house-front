<template>
    <b-container v-if="housegraph" class="bv-example-row">
        
      
      <b-row class="mb-2 mt-1">
        <b-col><b-img :src="require('@/assets/apt.png')" fluid-grow></b-img></b-col>
      </b-row>
      <b-row>
        
      </b-row>
      <div class="toggle-bar">
        <button @click="selectGraph('graph1')">Graph 1</button>
      <button @click="selectGraph('graph2')">Graph 2</button>
    </div>
    <div class="chart-container" v-if="isChartContainerReady">
      <canvas ref="chartCanvas" id="myChart" width="1200" height="300"></canvas>
    </div>
      
    
      
      
    </b-container>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import { showBarChart } from "@/service/graph";

  const houseStore = "houseStore";
  console.log(houseStore);
  
  export default {
    name: "HouseGraph",
      data() {
            return {
                selectedGraph: "graph1",
      isChartContainerReady: false,
      chart: null,
        }
    },
      components: {
        
    },
      
    
     created() {
        console.log(this.housegraph);    
    },
      mounted() {
        this.isChartContainerReady = true;
        this.renderChart();
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
    methods: {
    selectGraph(selectedGraph) {
      this.renderChart(selectedGraph);
    },
    renderChart(selectedGraph = "graph1") {
      const chartData = {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            label: "Dataset 1",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            data: [10, 20, 30, 40],
          },
        ],
      };

      if (selectedGraph === "graph2") {
        chartData.datasets.push({
          label: "Dataset 2",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          data: [50, 60, 70, 80],
        });
      }

      const canvas = this.$refs.chartCanvas;
      if (canvas) {
        if (this.chart) {
          this.chart.destroy();
            }
            console.log(2);
        this.chart = showBarChart("myChart", chartData.labels, chartData.datasets);
      }
    },
  },
  };
  </script>
  
  <style>
    .toggle-bar {
  margin-bottom: 20px;
}

.chart-container {
  height: 300px;
}
    </style>
  