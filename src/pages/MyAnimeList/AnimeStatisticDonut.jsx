import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Watching', 'Plan to watch', 'Completed', 'Dropped'],

  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#4682b4',
        '#79A9CF',
        '#b7c8d6',
        '#aaa',
      ],
      borderColor: [
        'rgba(242, 235, 242, 0.874)',
        'rgba(242, 235, 242, 0.874)',
        'rgba(242, 235, 242, 0.874)',
        'rgba(242, 235, 242, 0.874)',
      ],
      borderWidth: 0,
    },
  ],
};

export const AnimetatisticDonut  = () => {
  return (
    <div style={{height:"15px", width:"250px"}} >
        <Doughnut data={data} />
    </div>
  )

  
}
