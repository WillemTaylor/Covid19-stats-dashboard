export const casesChartData = (name, confirmed, critical, recovered, deaths) => {
  return {
    type: 'bar',
    data: {
      labels: ['Confirmed Cases', name, 'Recovered', 'Deaths'],
      datasets: [
        {
          data: [confirmed, critical, recovered, deaths],
          backgroundColor: ['rgb(29, 105, 150)', 'rgb(237, 173, 8)', 'rgb(115, 175, 72)', 'rgb(148, 52, 110)'],
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        mode: 'index',
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25,
            },
          },
        ],
      },
    },
  };
};

export default casesChartData;
