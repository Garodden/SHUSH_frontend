import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// styled-components 스타일 선언

const CalendarContainer = styled.div`
    width: 450px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const YearMonth = styled.div`
    font-size: 30px;
`;

const NavigationButton = styled.button`
    background-color: #58D3F7;
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
    background-color: #f0f0f0;
    font-weight: bold;
    padding: 5px;
    width: 100%;
    align-items: center;
`;

const Day = styled.div`
    width: calc(100% / 7);
    text-align: center;
`;

const DatesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    width: 100%;
    justify-items: center;
    align-items: center;
`;

const DateItem = styled.div`
    background-color: #fff;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    width: calc(100% / 7 - 10px);
    display: flex;
    align-items: center;
    justify-content: center;

    &.today {
        background-color: #58D3F7;
        color: #fff;
        border-radius: 50%;
        width: 24px;
        height: 24px;
    }
`;

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dates, setDates] = useState<Array<number>>([]);

    useEffect(() => {
        renderCalendar();
    }, [currentDate]);

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        let daysArray = new Array(firstDay).fill(null);
        for (let i = 1; i <= lastDay; i++) {
            daysArray.push(i);
        }

        setDates(daysArray);
    };

    const dateClicked = (day: number) => {
        alert(`선택한 날짜: ${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${day}일`);
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
        <CalendarContainer>
            <Header>
                <YearMonth>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</YearMonth>
                <div>
                    <NavigationButton onClick={prevMonth}>&lt;</NavigationButton>
                    <NavigationButton onClick={goToday}>Today</NavigationButton>
                    <NavigationButton onClick={nextMonth}>&gt;</NavigationButton>
                </div>
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
                        if (date) {
                            return (
                                <DateItem
                                    key={idx}
                                    onClick={() => dateClicked(date)}
                                    className={date === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() ? 'today' : ''}
                                >
                                    {date}
                                </DateItem>
                            );
                        } else {
                            return <DateItem key={idx} />;
                        }
                    })}
                </DatesContainer>
            </div>
        </CalendarContainer>
    );
};

export default Calendar;