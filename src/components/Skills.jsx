import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['HTML','CSS','JS','NODEJS','ANGULAR','REACTJS',],
    datasets: [
      {
        data: [100, 100, 95, 80, 80, 80],
        backgroundColor: [
          '#FA5A00'
        ],
        borderColor: [
          'black'
        ],
        borderWidth: 1,
      },
    ],
  };

const Skills = () => {
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center overflow-hidden'>
        <div className="content sm:h-[100%] sm:w-[100%] h-full w-full flex items-center justify-center">
        <Doughnut data={data} />
        </div>
    </div>
  )
}

export default Skills
