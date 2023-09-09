import { useEffect, useState, useRef, MouseEvent } from 'react';
import axios from 'axios';
import { HourlyData, DailyData, WeeklyData, ChartElementTypes} from '../interfaces/types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import {Line, getElementAtEvent} from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );


function ChartComponent() {
    const [hourlyData, setHourlyData] = useState<ChartElementTypes|null>(null);
    const [dailyData, setDailyData] = useState<ChartElementTypes|null>(null);
    const [weeklyData, setWeeklyData] = useState<ChartElementTypes|null>(null);
  
    

    const fetchData = async (url:string) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    };

    
    const dateLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const chartRef = useRef();
    
    const OnClick = (event:React.MouseEvent<HTMLCanvasElement>) =>{
      if(chartRef.current && getElementAtEvent(chartRef.current, event).length >0){
        console.log(getElementAtEvent(chartRef.current, event))
        const clickDatasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
        const clickIndex = getElementAtEvent(chartRef.current, event)[0].index;
      }
      
    }



    useEffect(() => {

    fetchData('http://localhost:4000/getAverageData/weekly/2023-8-20/B').then((data:WeeklyData[]) => {
        const legend = data.map(item => `${item.id.startYear}/${item.id.startMonth}/${item.id.startDay} ~ ${item.id.endYear}/${item.id.endMonth}/${item.id.endDay}`);
        const avgData = data.map(item => item.average);
        setWeeklyData({
          labels :legend,
          datasets :[{
            label:'Weekly Average',
            data: avgData,
            fill:false,
            borderColor : 'rgb(164, 86, 202)',
            tension: 0.2
            }]
          

        })
       

      });

      fetchData('http://localhost:4000/getAverageData/daily/2023-8-20/B').then((data:DailyData[]) => {
        const timeData = data.map(item => `${item.id.year}/${item.id.month}/${item.id.day}`);
        const avgData = data.map(item => item.average);
        setDailyData({
          labels : timeData,
          datasets :[{
            label:'daily Average',
            data: avgData,
            fill:false,
            borderColor : 'rgb(164, 86, 202)',
            tension: 0.2
            }]

         
      });
    });

    fetchData(`http://localhost:4000/getAverageData/hourly/2023-8-20/B`).then((data:HourlyData[]) => {
      const timeData = data.map(item => item.id.hour);
      const avgData = data.map(item => item.average);

      setHourlyData({
        labels :timeData,
        datasets :[{
          label:`hourly average`,
          data: avgData,
          fill:false,
          borderColor : 'rgb(164, 86, 202)',
          tension: 0.2
          }]
     
    });
  });


  },[]);

  

  return (
    <>
      {dailyData && <Line
        data={dailyData} 
        options={{ responsive: true, maintainAspectRatio: true, aspectRatio: 1,}}
        onClick={OnClick}
        ref = {chartRef}
        />} 
    
    </>
  );

  
}
  
  export default ChartComponent;