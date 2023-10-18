import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Visitors Profile',
      },
    },
};

export const data = {
  labels: ['Male', 'Female', 'Others'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 1],
      backgroundColor: [
        '#425EBD',
        '#57C8E9',
        '#FBD84A',
      ],
      borderColor: [
        '#425EBD',
        '#57C8E9',
        '#FBD84A'
      ],
      borderWidth: 1,
    },
  ],
};

const VisitorsChart = () => {
  return <Pie options={options} data={data} />;
}

export default VisitorsChart;
