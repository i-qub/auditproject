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
        text: 'Customer Satisfaction',
      },
    },
};

export const data = {
  labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied' ],
  datasets: [
    {
      label: '# of Votes',
      data: [31, 40, 17, 7, 5],
      backgroundColor: [
        '#000063',
        '#4527a0',
        '#65499c',
        '#b39ddb',
        '#e6ceff',
      ],
      borderColor: [
        '#000063',
        '#4527a0',
        '#65499c',
        '#b39ddb',
        '#e6ceff',
      ],
      borderWidth: 1,
    },
  ],
};

const CustomerSatisfaction = () => {
  return <Pie options={options} data={data} />;
}

export default CustomerSatisfaction;
