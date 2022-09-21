import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Reading', 'Plan to read', 'Completed', 'Dropped'],

  datasets: [
    {
      label: '# of Votes',
      data: [5, 11, 3, 1],
      backgroundColor: [
        '#df52b4',
        '#b78bc7',
        '#edacd9',
        '#c3bfbf',
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

export const MangaStatisticDonut = () => {
  return (
    <div style={{height:"15px", width:"250px"}} >
        <Doughnut data={data} />
    </div>
  )

  
}
