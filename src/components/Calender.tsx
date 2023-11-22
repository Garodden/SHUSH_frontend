import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import ChartComponentDay from './ChartComponentDay';
import { HourlyData, DailyData, WeeklyData, ChartElementTypes, ColorPalettes, ChartComponentDayProps} from '../interfaces/types';

// styled-components 스타일 선언
type CalendarContainerProps = {
    clicked: boolean;
};


const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 15px;
    padding:20px;
    background-color:${ColorPalettes.mainContainerColor};
`;


const ChartContainer = styled.div`

    flex: 1;    
    width: 100%;
    padding: 0%;  // 30%에서 10%로 변경
      // 상하 간격은 0, 좌우 간격은 10px
      
`;


const CalendarContainer = styled.div<CalendarContainerProps>`
    flex: 1; // flex container의 사용 가능한 공간을 최대한 활용하도록 변경
    width: 450px;
    height: 500px;
    background-color: ${ColorPalettes.calenderContainerColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    align-self: flex-start;
    color:${ColorPalettes.calenderTextColor}
`;


const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem; // rem 단위로 변경
`;


const YearMonth = styled.div`
    flex: 1;
    display: flex; // flexbox 사용
    justify-content: center; // 수평 중앙 정렬
    align-items: center; // 수직 중앙 정렬
    gap: 90px;
    text-align: center;
    font-size: 1.5rem; // rem 단위로 변경
`;

const NavigationButton = styled.button`
    background-color: ${ColorPalettes.calenderPointColor};
    font-size: 20px;
    color: #fff;
    border: none;
    padding: 20px 25px;
    border-radius: 10px;
    cursor: pointer;
    
`;

const DaysContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${ColorPalettes.calenderPointColor};
    border-radius: 7px;
    font-weight: bold;
    padding: 0px;
    width: 100%;
    align-items: center;
    justify-items: flex-start;
`;

const Day = styled.div`
    width: calc(100% / 7);
    text-align: center;
`;

const DatesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    width: 100%;
    justify-items: center;
    align-items: center;
`;

const DateItem = styled.div`
    padding: 20px;
    text-align: center;
    cursor: pointer;
    width: calc(100% / 7 - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    &.today {
        background-color: ${ColorPalettes.calenderPointColor};
        color: #fff;
        border-radius: 50%;
        width: 14px;
        height: 14px;
    }
    &.half-transparent{
        opacity: 0.5;
    }
`;


  

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dates, setDates] = useState<Array<number>>([]);
    const [clickedDate, setclickedDate] = useState<string|null>(null);
    const [AvailableDay , setAvailableDay] =  useState<Array<boolean>>([]);
    const [ReCentDayInCurMonth , setReCentDayInCurMonth] =  useState<number|0>();
    const [curPosition, setCurPosition] = useState<string|'A'>();
    useEffect(() => {
        renderCalendar();
    }, [currentDate]);

    const fetchData = async (url:string) => {
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          console.error("Error fetching data:", error);
          return [];
        }
      };
 

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        let daysArray = new Array(firstDay).fill(null);
        for (let i = 1; i <= lastDay; i++) {
            daysArray.push(i);
        }
        setclickedDate(`${currentDate.getFullYear}-${currentDate.getMonth}-${currentDate.getDay}`)
        setDates(daysArray);
        setCurPosition("A");
        checkAvailableDays(year, month, lastDay);
    };  

    const checkAvailableDays = (year:number , month:number, lastDay:number) =>{
        fetchData(`http://43.201.157.179:8080/getAverageData/existing_days_in_month/${year}-${month+1}/${curPosition}`).then((data:DailyData[]) => {
            const daysAvailable  = data.map(item => item.id.day);

            if (daysAvailable.length > 0) {
                setReCentDayInCurMonth(daysAvailable[daysAvailable.length - 1]);
                setclickedDate(`${year}-${month+1}-${ReCentDayInCurMonth}`)
            }
            else{
                setReCentDayInCurMonth(0);
            }
            
            setAvailableDay(
                Array.from({ length: lastDay + 1 }, (_, index) => daysAvailable.includes(index))
            );
        });
    }
  
    const dateClicked = (day: number) => {
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth()+1).toString().padStart(2, '0');
        const formattedDay = day.toString().padStart(2, '0');
        setclickedDate(null);
        setclickedDate(`${year}-${month}-${formattedDay}`);
    };

    const prevMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
    };

    const goToday = () => {
        setCurrentDate(new Date());
    };

    return (
        <>
        <MainContainer>

        <CalendarContainer clicked={!!clickedDate}>
            <Header>
                <YearMonth>
                <NavigationButton onClick={prevMonth}>&lt;</NavigationButton>
                    <div style={{ width: `150px` }}>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</div>
                <NavigationButton onClick={nextMonth}>&gt;</NavigationButton>
                </YearMonth>
            </Header>
            <div>
                <DaysContainer>
                    <Day>일</Day>
                    <Day>월</Day>
                    <Day>화</Day>
                    <Day>수</Day>
                    <Day>목</Day>
                    <Day>금</Day>
                    <Day>토</Day>
                </DaysContainer>
                <DatesContainer>
                    {dates.map((date, idx) => {
                         const isAvailable = date ? AvailableDay[date] : false;
                         const isToday = date === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();
                         if (date && isAvailable) {
                            return (
                                <DateItem
                                    key={idx}
                                    onClick={() => dateClicked(date)}
                                    className={isToday ? 'today' : ''}
                                >
                                    {date}
                                </DateItem>
                            );
                        } else {
                            // date가 없거나, 선택 불가능한 경우
                            return (
                                <DateItem
                                    key={idx}
                                    className={`${isToday ? 'today' : ''} ${!isAvailable ? 'half-transparent' : ''}`}
                                >
                                    {date}
                                </DateItem>
                            );
                        }
                    })}
                </DatesContainer>
            </div>
        </CalendarContainer>

        {clickedDate && <ChartComponentDay CalenderClickedDate={clickedDate} curPosition={curPosition || "B"} />}
        
        </MainContainer>
    </>

    );
};
export default Calendar;