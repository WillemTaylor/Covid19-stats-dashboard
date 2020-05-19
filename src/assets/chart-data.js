export const casesChartData = (confirmed, critical, recovered, deaths) => {
  return {
    type: 'bar',
    data: {
      labels: ['Confirmed Cases', 'Critical Cases', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'Confirmed',
          data: [confirmed, critical, recovered, deaths],
          backgroundColor: ['rgb(29, 105, 150)', 'rgb(237, 173, 8)', 'rgb(115, 175, 72)', 'rgb(148, 52, 110)'],
        },
        {
          label: 'Critical',
          backgroundColor: 'rgb(237, 173, 8)',
        },
        {
          label: 'Recovered',
          backgroundColor: 'rgb(115, 175, 72)',
        },
        {
          label: 'Deaths',
          backgroundColor: 'rgb(148, 52, 110)',
        },
      ],
    },
    options: {
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
