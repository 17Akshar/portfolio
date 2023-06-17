import React,{useState,useEffect} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};



const Skills = (props) => {
  var labels = []
  var data = []
  var bgcolor = []
  const [skill,setSkill] = useState(null)
  useEffect(()=>{
    setSkill(props.data)
  },[])
  if(skill!==null){
    skill.forEach((ele)=>{
      if(ele.skill_name!=='skill_name'){
        labels.push(ele.skill_name)
        data.push(ele.skill_percantage)
        bgcolor.push(ele.skill_color)
      }
    })
  }
  var data = {
    labels,
    datasets: [
      {
        label: 'Skill Level',
        data: data,
        backgroundColor: bgcolor,
      }
    ],
  };
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center overflow-hidden'>
        <div className="content sm:h-[100%] sm:w-[100%] h-screen w-screen flex items-center overflow-auto justify-center">
        <Bar options={options} data={data} />
        </div>
    </div>
  )
}

export default Skills
