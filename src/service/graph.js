import Chart from "chart.js/auto";

const showBarChart = function (chartId, labels, datasets) {
    const ctx = document.getElementById(chartId);
    if (!ctx) return; // 차트 컨테이너가 존재하지 않으면 함수 종료

    return new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

export { showBarChart };
