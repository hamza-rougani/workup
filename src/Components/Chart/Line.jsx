import React from 'react'
import {Line} from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
} from 'chart.js'
import { LineChartData } from './Fakedata';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
)
function Line() {
    const options = {};
    const  data ={};
  return (
    <Line options={options} data={LineChartData}/>
  )
}

export default Line