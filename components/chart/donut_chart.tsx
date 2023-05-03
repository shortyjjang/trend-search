import React, { useCallback } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { COLORS } from '../wordcloud/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
type KeywordProps = {
    word: string
    count: number
}
export function DoughnutChart({data}: {
    data: KeywordProps[]
}) {
    if(data.length < 1) return null
    return <Doughnut data={{
        labels: data.map(word => word.word),
        datasets: [
            {
              label: '노출횟수',
              data: data.map(word => word.count),
              backgroundColor: data.map(data => COLORS[Math.floor(Math.random() * 10)]),
              borderColor: data.map(data => COLORS[Math.floor(Math.random() * 10)]),
              borderWidth: 1,
            },
        ],
    }} options={{
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: '키워드별 노출횟수'
        }
      },
    }}/>;
}
