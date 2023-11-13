import React, {useState} from "react";
import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import axios from "axios";
import ChartComponentDay from "./components/ChartComponentDay";
import Calendar from "./components/Calender";
import DBEffects from "./components/DBEffects";
import backgroundImage from './images/gradation_background2.jpg';
import InfoComponent from "./components/SHUSHInfo";
import { ColorPalettes } from "./interfaces/types";


const BackgroundStyle = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${ColorPalettes.backGroundColor};
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: -3;

  // Flex 설정
  display: flex;
  flex-direction: column; // 세로로 아이템들을 배치
  align-items: center;    // 가로 중앙 정렬
  justify-content: flex-start; // 세로 시작 위치에서 아이템 배치 시작

  // 각 아이템들 사이의 간격을 설정
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const BackgroundStyle2 = styled.div`
  width: 100vw;
  height: 300vh;
  background-color: ${ColorPalettes.backGroundColor2};
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: -3;

  // Flex 설정
  display: flex;
  flex-direction: column; // 세로로 아이템들을 배치
  align-items: center;    // 가로 중앙 정렬
  justify-content: flex-start; // 세로 시작 위치에서 아이템 배치 시작

  // 각 아이템들 사이의 간격을 설정
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;


const BackgroundBox = styled.div`
    flex:1;
    width: 100vw;
    height: 300vh;
    background-color: ${ColorPalettes.backGroundColor2};
    position: absolute;
    z-index: -4;  // 다른 요소들 뒤에 위치하도록
    display: flex;
`;

const TitleBox = styled.div`
    width:1230px;
    
    text-align: left;
    color: white;
`;

const StyledH1 = styled.h1`
  font-size: 5em;
  display: inline;
  margin-bottom: 0em !important;
  
`;

const StyledH3 = styled.h3`
  font-size: 1.5em;
  display: inline;
  font-weight: normal;
  margin-top: 0!important;
  // 상단 간격 제거
  margin-bottom: 0em!important;
  
`;

const StyledH2 = styled.h2`
  font-size: 2em;
  font-weight: normal;
  margin-top: 0; 
  line-height: 0.8; /* 또는 'px' 단위로 값을 지정 */
`;

function App() {

  return (
    <>
    
    <BackgroundBox>
      
      <BackgroundStyle>
        <TitleBox>
          <StyledH1>SHUSH</StyledH1>
          <StyledH3> SOCIAL PROBLEM-SOLVING PROJECT</StyledH3>
          <StyledH2>know your local noise polluting</StyledH2>
        </TitleBox>  
        <Calendar />
        <InfoComponent/>
          
          <div style={{ width: '50%', padding: '25%', zIndex: 1, transform: 'translateY(-20%)'}}>
            
          <div style={{ width: '110%'}}>
          
          </div>
          </div>

      </BackgroundStyle>
      </BackgroundBox>
      
    </>
  );

}

export default App;
