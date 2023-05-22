// import Chart from 'chart.js'

//         let myChart = null;
//         let container = null;

//         const show = function (event, num)
//         {
//           if (myChart)
//             myChart.destroy()
//           if(container)
//             container.destroy()
//           if (num == 1) {

//             event.preventDefault();
//             var context = document
//               .getElementById('myChart')
//               .getContext('2d');
//             var m0 = 1
//             var m1 = 2
//             var m2 = 3
//             var w0 = 4
//             var w1 = 5
//             var w2 = 6
//             myChart = new Chart(context, {
//               type: 'bar', // 차트의 형태
//               data: { // 차트에 들어갈 데이터
//                 labels: [
//                   //x 축
//                   "남성", '여성'
//                 ],
//                 datasets: [
//                   {
//                     label: "0등급",
//                     data: [m0, w0], //1등급 10대 몇명, 20대 몇명, 30대 몇명 데이터입력
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     pointBorderColor: "#fff",
//                     pointBackgroundColor: "rgba(255, 99, 132, 1)",
//                     borderWidth: 1,
//                     fill: true
//                   },
//                   {
//                     label: "1등급",
//                     data: [m1, w1],
//                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     borderWidth: 1,
//                     pointBorderColor: "#fff",
//                     pointBackgroundColor: "rgba(54, 162, 235, 1)",
//                     fill: true
//                   },
//                   {
//                     label: "2등급",
//                     data: [m2, w2],
//                     backgroundColor: 'rgba(255, 206, 86, 0.2)',
//                     borderColor: 'rgba(255, 206, 86, 1)',
//                     pointBorderColor: "#fff",
//                     pointBackgroundColor: "rgba(255, 206, 86, 1)",
//                     borderWidth: 1,
//                     fill: true
//                   }
//                 ]
//               },
//               options: {
//                 legend: { display: true },
//                 title: {
//                   display: true,
//                   text: '성별 관측치 수'
//                 },
//                 scales: {
//                   yAxes: [
//                     {
//                       ticks: {
//                         beginAtZero: true
//                       }
//                     }
//                   ]
//                 }
//               }
//             })
//           }
// };
// export default show

import Chart from 'chart.js/auto';

const showBarChart = function(chartId, labels, datasets) {
  const ctx = document.getElementById(chartId);
  if (!ctx) return; // 차트 컨테이너가 존재하지 않으면 함수 종료

  return new Chart(ctx, {
    type: 'line',
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

