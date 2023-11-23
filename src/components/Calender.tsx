import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import ChartComponentDay from './ChartComponentDay';
import { HourlyData, DailyData, WeeklyData, ChartElementTypes, ColorPalettes, ChartComponentDayProps} from '../interfaces/types';

//styled-components 스타일 선언
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
    align-self: center;
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
    color: white;
    border-radius: 7px;
    font-weight: bold;
    padding: 0px;
    width: 100%;
    align-self: flex-start;
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


const LeftSideofMainContainer = styled.div`
display: flex;
flex-direction: column; // 컨테이너의 요소들을 세로로 배치
justify-content: center; // 세로 방향 중앙 정렬
align-items: center; // 가로 방향 중앙 정렬
height: 100%;

`
const PositionButtonsContainer = styled.div`
display:grid;
grid-template-columns: auto auto auto; // 두 열
grid-template-rows: auto;  // 한 행 
border-radius: 20px;
padding: 10px;
margin: 5px 0px;
border: 3px solid white;
align-self:flex-start;
justify-content: center; // 가로 중앙 정렬
align-items: center; // 세로 중앙 정렬
   
`;

const PositionButton = styled.button`
border: 5px solid white; // 하얀색 보더
border-radius: 50%; // 원형 모양
background-color: transparent; // 배경색 투명
color: white; // 글자색 하얀색
padding: 10px 15px; // 적절한 패딩
font-size: 16px; // 글자 크기
cursor: pointer; // 마우스 오버시 커서 변경
margin: 0px 5px;
font-weight: bold;
position:relative;
opacity:50%;
&:hover {
    opacity:100%;
};
&:hover::after {
    content: attr(data-hover-text); // data-hover-text 속성값을 텍스트로 설정
    position: absolute;
    top: -40px; // 버튼 아래에 위치
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    // 추가적인 스타일링...
  };
`;


const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dates, setDates] = useState<Array<number>>([]);
    const [clickedDate, setclickedDate] = useState<string|null>(`${new Date().getFullYear}-${new Date().getMonth}-${new Date().getDay}`);
    const [AvailableDay , setAvailableDay] =  useState<Array<boolean>>([]);
    const [ReCentDayInCurMonth , setReCentDayInCurMonth] =  useState<number|0>();
    const [curPosition="A", setCurPosition] = useState<string|'A'>();
    useEffect(() => {
        
        renderCalendar();
        
    }, [currentDate, curPosition]);

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
        <LeftSideofMainContainer>
            <PositionButtonsContainer>
                <PositionButton  data-hover-text="한마음 앞 소음측정기" onClick={() => setCurPosition("A")}>A</PositionButton>
                <PositionButton  data-hover-text="욱일 뒤 소음측정기" onClick={() => setCurPosition("B")}>B</PositionButton>
                <PositionButton  data-hover-text="농심 뒤 소음측정기" onClick={() => setCurPosition("c")}>C</PositionButton>
            </PositionButtonsContainer>
            <CalendarContainer clicked={!!clickedDate}>
            
            <Header>
                <YearMonth>
                <NavigationButton onClick={prevMonth}>&lt;</NavigationButton>
                    <div style={{ width: `150px` }}>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</div>
                <NavigationButton onClick={nextMonth}>&gt;</NavigationButton>
                </YearMonth>
            </Header>
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
            </CalendarContainer>
        </LeftSideofMainContainer>
        {clickedDate && <ChartComponentDay CalenderClickedDate={clickedDate} curPosition={curPosition || "B"} />}
        </MainContainer>
    </>

    );
};
export default Calendar;