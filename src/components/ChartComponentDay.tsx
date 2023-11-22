import { useEffect, useState, useRef, MouseEvent } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import { HourlyData, DailyData, WeeklyData, ChartElementTypes, ColorPalettes,ChartComponentDayProps} from '../interfaces/types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
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
    Filler,
  );

  const ChartContainer = styled.div`
  
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  `
  const ChartStyle = styled.div`
  background-color:${ColorPalettes.chartBaseColor};
  border: none;
  width: 700px;
  height: 350px;
  border-radius: 10px;
  cursor: pointer;
`;


function ChartComponentDay({ CalenderClickedDate, curPosition="" }:ChartComponentDayProps) {
    const [hourlyData, setHourlyData] = useState<ChartElementTypes|null>(null);
    const [dailyData, setDailyData] = useState<ChartElementTypes|null>(null);
    const [weeklyData, setWeeklyData] = useState<ChartElementTypes|null>(null);
    const [showHourlyChart, setShowHourlyChart] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [CalenderSelectedDate, setCalenderSelectedDate] = useState<string | null>(null);

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
    
    const createGradient = (context: any, startColor: string, endColor: string) => {
      const { ctx, chartArea: { top, bottom } } = context.chart;
      const gradient = ctx.createLinearGradient(0, top, 0, bottom);
      gradient.addColorStop(0, startColor);
      gradient.addColorStop(1, endColor);
      return gradient;
  };

    const OnClick = (event:React.MouseEvent<HTMLCanvasElement>) =>{
      if(chartRef.current && getElementAtEvent(chartRef.current, event).length >0){
        const clickedElement = getElementAtEvent(chartRef.current, event)[0];
        if(dailyData){
        const clickedLabel = dailyData.labels[clickedElement.index] as string;
        setSelectedDate(clickedLabel);
        setShowHourlyChart(true);
        }
      }
      }
  



    useEffect(() => {
      if(CalenderClickedDate && CalenderClickedDate[CalenderClickedDate.length-1] !=="0"){
        /*
    fetchData(`http://43.201.157.179:8080/getAverageData/weekly/${CalenderClickedDate}/${curPosition}`).then((data:WeeklyData[]) => {
        const legend = data.map(item => `${item.id.startYear}-${item.id.startMonth}-${item.id.startDay} ~ ${item.id.endYear}-${item.id.endMonth}-${item.id.endDay}`);
        const avgData = data.map(item => item.average);
        setWeeklyData({
          labels :legend,
          datasets :[{
            label:'Weekly Average',
            data: avgData,
            fill: {
              target: 'origin',
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            },  // fill 속성을 true로 설정
            backgroundColor: [
              ColorPalettes.chartFillColor1,
              ColorPalettes.chartFillColor2,
              ColorPalettes.chartFillColor3,],
            borderColor : [
              ColorPalettes.chartBoarderColor1,
              ColorPalettes.chartBoarderColor2,
              ColorPalettes.chartBoarderColor3,],
              pointBackgroundColor :[
                ColorPalettes.chartFillColor1,
                ColorPalettes.chartFillColor2,
                ColorPalettes.chartFillColor3,],
            tension: 0.2
            }]
          

        })
      });
      */
      

      fetchData(`http://43.201.157.179:8080/getAverageData/daily/${CalenderClickedDate}/${curPosition}`).then((data:DailyData[]) => {
        const timeData = data.map(item => `${item.id.year}-${item.id.month}-${item.id.day}`);
        const avgData = data.map(item => item.average);
        setDailyData({
          labels : timeData,
          datasets :[{
            label:data.length === 0 ? '선택된 날짜가 없습니다' : `${timeData[0]} ~ ${timeData[timeData.length - 1]} 일별 평균 수치`,
            data: avgData,
            fill: {
              target: 'origin',
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            },
            backgroundColor: [ColorPalettes.chartFillColor2],
              
            borderColor : [
              ColorPalettes.chartBoarderColor2,],
              pointBackgroundColor :[
                ColorPalettes.chartFillColor2,],
            tension: 0.2
            }]
      });
    });
  } 

  setSelectedDate(CalenderClickedDate);

},[CalenderClickedDate]);



  useEffect(() => {
    if(selectedDate){
    fetchData(`http://43.201.157.179:8080/getAverageData/hourly/${selectedDate}/${curPosition}`).then((data:HourlyData[]) => {
      const timeData = Array.from({ length: 24 }, (_, i) => i);
      const avgData = new Array(24).fill(0);

      data.forEach(item => {
        let hourIndex = item.id.hour;
        avgData[hourIndex] = item.average; // 평균값 저장
      });

      setHourlyData({
        labels :timeData,
        datasets :[{
          label: data.length === 0 ? '선택된 날짜가 없습니다' :`${selectedDate}의 시간당 평균 수치`,
          data: avgData,
          fill: {
            target: 'origin',
            below: 'rgb(0, 0, 255)'    // And blue below the origin
          },
          backgroundColor: [ColorPalettes.chartFillColor1],
          borderColor : [
            ColorPalettes.chartBoarderColor1,],
            pointBackgroundColor :[
              ColorPalettes.chartFillColor1,],
          tension: 0.2
          }]
        
    });
    
  });
  
  

}
}
,[selectedDate]);

const optionsDay = { 
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  scales: {
    y: {
      min: 0,       // Y축의 최소값
      max: 80,     // Y축의 최대값
      ticks: {
        stepSize: 0.2
      }
    },} 
  };

const optionsHour = { 
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  fill: true,
  scales: {
    y: {
      min: 0,       // Y축의 최소값
      max: 80,     // Y축의 최대값
      ticks: {
        stepSize: 10
      }
    
    },
    } 
  };



  return (
    
    <ChartContainer>
      <ChartStyle>
      {dailyData && <Line
        data={dailyData} 
        options={optionsDay}
        onClick={OnClick}
        ref = {chartRef}
        />} 
      </ChartStyle>
      
      <ChartStyle>
        {selectedDate && hourlyData && <Line
        data={hourlyData} 
        options={optionsHour} />}
      </ChartStyle>
    </ChartContainer>
  );

  
}
  
  export default ChartComponentDay;