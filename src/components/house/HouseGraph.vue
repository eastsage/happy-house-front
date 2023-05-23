<template>
    <b-container v-if="housegraph" class="bv-example-row">
        <b-row class="mb-2 mt-1">
            <b-col><b-img :src="require('@/assets/apt.png')" fluid-grow></b-img></b-col>
        </b-row>
        <div>
            <b-row>
                <b-col></b-col>
                <b-col cols="8">
                    <b-form-select
                        v-model="selected"
                        :options="options"
                        size="md"
                        class="mt-3"
                    ></b-form-select>
                </b-col>
                <b-col cols="2">
                    <b-button
                        id="tooltip-target"
                        class="md-2 mt-3"
                        variant="outline-primary"
                        @click="selectGraph('push')"
                        >데이터 추가</b-button
                    >
                    <b-tooltip target="tooltip-target" triggers="hover">
                        그래프 위 라벨을 클릭해서 해당 그래프를 <b>제거</b> 할 수 있습니다
                    </b-tooltip>
                </b-col>
                <b-col></b-col>
            </b-row>
        </div>

        <div class="chart-container" v-if="isChartContainerReady">
            <canvas ref="chartCanvas" id="myChart" width="1200" height="300"></canvas>
        </div>
    </b-container>
</template>

<script>
import { mapState } from "vuex";
import { showBarChart } from "@/service/graph";
// import func from "vue-editor-bridge";

const houseStore = "houseStore";

export default {
    name: "HouseGraph",
    data() {
        return {
            selectedGraph: "graph1",
            isChartContainerReady: false,
            chartData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                datasets: [],
            },
            chart: null,
            selected: null,
            options: [],
        };
    },
    created() {
        console.log(this.housegraph);
    },
    mounted() {
        this.makeOptions();
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
        makeOptions() {
            let year = [];
            let options = [{ value: null, text: "원하는 연도를 선택하세요" }];
            this.housegraph.forEach((element) => {
                if (!year.includes(element.dealYear)) {
                    year.push(element.dealYear);
                }
            });
            year.forEach((element) => options.push({ value: element, text: element }));
            this.options = options;
        },
        databind() {
            let selectedYear = this.selected;
            const selectedByYear = this.housegraph.filter((data) => data.dealYear == selectedYear);

            let month = [[], [], [], [], [], [], [], [], [], [], [], []];
            for (let index = 0; index < selectedByYear.length; index++) {
                let curMonth = selectedByYear[index].dealMonth;
                let curDealAmount = selectedByYear[index].dealAmount.replace(/,/g, "");
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
        renderChart(method) {
            /* 
            1. chartData.datasets.push 를 담당하는 함수 만들기
            2. chartData.datasets.remove를 담당하는 함수 만들기
            3. label 값을 변수로 연도별 지정
            4. destroy & render을 Push or Remove마다 해줌*/
            if (method === "push") {
                let rand = [Math.floor(Math.random() * 256)];
                rand.push(Math.floor(Math.random() * 256));
                rand.push(Math.floor(Math.random() * 256));

                this.chartData.datasets.push({
                    label: this.selected,
                    backgroundColor: `rgba(${rand[0]}, ${rand[1]}, ${rand[2]}, 0.2)`,
                    borderColor: `rgba(${rand[0]}, ${rand[1]}, ${rand[2]}, 1)`,
                    data: this.databind(2015),
                });
            }

            const canvas = this.$refs.chartCanvas;
            if (canvas) {
                if (this.chart) {
                    this.chart.destroy();
                }

                const chart1 = showBarChart(
                    "myChart",
                    this.chartData.labels,
                    this.chartData.datasets
                );
                this.chart = chart1;
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
