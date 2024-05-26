import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Feb 9, 2020 ',
      'Feb 10, 2020 ',
      'Feb 11, 2020 ',
      'Feb 12, 2020 ',
      'Feb 13, 2020 ',
    ],
    datasets: [
      {
        label: '— Temperature, C°',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 107, 9, 1)',
        borderColor: 'rgba(255, 107, 9, 1)',
      },
      {
        label: '— Humidity, % ',
        data: [112, 119, 13, 15, 12, 13],
        backgroundColor: 'rgba(9, 6, 235, 1)',
        borderColor: 'rgba(9, 6, 235, 1)',
      },
      {
        label: '— Wind Speed, m/s ',
        data: [121, 191, 31, 51, 21, 31],
        backgroundColor: ['rgba(234, 154, 5, 1)'],
        borderColor: ['rgba(234, 154, 5, 1)'],
      },
      {
        label: '— Atmosphere Pressure, m/m',
        data: [112, 119, 13, 51, 12, 31],
        backgroundColor: 'rgba(6, 120, 6, 1)',
        borderColor: 'rgba(6, 120, 6, 1)',
      },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0.2,
        borderWidth: 1,
      },
    },
    plugins: {
      legend: {
        display: true,
        align: 'center',
        title: {
          display: true,
          text: 'AVERAGE: ',
          position: 'top',
          padding: 0,
        },
        labels: {
          boxWidth: 15,
          boxHeight: 12,
          defaultFontColor: 'rgb(5, 120, 6)',
          color: 'rgba(247, 242, 242, 1)',
          padding: 10,
        },
      },
      title: {
        display: true,
        text: 'Value of indicators',
        position: 'left',
        padding: 0,
        fullSize: false,
      },
    },

    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.4)',
          borderColor: 'rgba(255, 255, 255, 1)',
        },
        ticks: {
          padding: 18,
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.4)',
          borderColor: 'rgba(255, 255, 255, 1)',
        },
        ticks: {
          padding: 18,
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  },
});
