<template>
    <b-container v-if="housegraph" class="bv-example-row">
        <b-row class="mb-2 mt-1">
            <b-col><b-img :src="require('@/assets/apt.png')" fluid-grow></b-img></b-col>
        </b-row>
        <b-row> </b-row>
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

export default {
    name: "HouseGraph",
    data() {
        return {
            selectedGraph: "graph1",
            isChartContainerReady: false,
            chart: null,
        };
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
    },
    filters: {
        price(value) {
            if (!value) return value;
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
    methods: {
        databind() {
            const wholeData = this.housegraph;
            let month = [[], [], [], [], [], [], [], [], [], [], [], []];
            for (let index = 0; index < wholeData.length; index++) {
                let curMonth = wholeData[index].dealMonth;
                let curDealAmount = wholeData[index].dealAmount.replace(/,/g, "");
                if (curMonth == 1) {
                    month[0].push(curDealAmount);
                } else if (curMonth == 2) {
                    month[1].push(curDealAmount);
                } else if (curMonth == 3) {
                    month[2].push(curDealAmount);
                } else if (curMonth == 4) {
                    month[3].push(curDealAmount);
                } else if (curMonth == 5) {
                    month[4].push(curDealAmount);
                } else if (curMonth == 6) {
                    month[5].push(curDealAmount);
                } else if (curMonth == 7) {
                    month[6].push(curDealAmount);
                } else if (curMonth == 8) {
                    month[7].push(curDealAmount);
                } else if (curMonth == 9) {
                    month[8].push(curDealAmount);
                } else if (curMonth == 10) {
                    month[9].push(curDealAmount);
                } else if (curMonth == 11) {
                    month[10].push(curDealAmount);
                } else if (curMonth == 12) {
                    month[11].push(curDealAmount);
                }
            }
            let ans = [];
            for (let i = 0; i < 12; i++) {
                if (month[i].length > 0) {
                    let sum = Number(0);
                    for (let j = 0; j < month[i].length; j++) {
                        sum += Number(month[i][j]);
                    }
                    console.log(sum);
                    sum /= month[i].length;
                    ans.push(sum);
                } else {
                    ans.push(0);
                }
            }
            return ans;
        },
        selectGraph(selectedGraph) {
            this.renderChart(selectedGraph);
        },
        renderChart(selectedGraph) {
            /* 
            1. chartData.datasets.push 를 담당하는 함수 만들기
            2. chartData.datasets.remove를 담당하는 함수 만들기
            3. label 값을 변수로 연도별 지정
            4. destroy & render을 Push or Remove마다 해줌*/
            const chartData = {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                datasets: [],
            };
            this.databind();
            if (selectedGraph === "graph1") {
                chartData.datasets.push({
                    label: "Dataset 1",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    // data: [10, 20, 30, 40],
                    data: this.databind(),
                });
            }

            if (selectedGraph === "graph2") {
                chartData.datasets.push({
                    label: "Dataset 2",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    data: [50, 60, 70, 80],
                });
            }

            const canvas = this.$refs.chartCanvas;
            console.log("77", this.chart, canvas);
            if (canvas) {
                if (this.chart) {
                    this.chart.destroy();
                    console.log(1);
                }

                console.log(2);
                const chart1 = showBarChart("myChart", chartData.labels, chartData.datasets);
                this.chart = chart1;
                console.log("88", chart1);
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
