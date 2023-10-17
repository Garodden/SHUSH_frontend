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
import SHUSHInfo from "./components/SHUSHInfo";
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
function App() {

  return (
    <>
    <BackgroundBox>
      <BackgroundStyle>
        <h1 style = {{color : `white`}}>team SHUSH</h1>
        <h2 style = {{color : `white`}}>know your local noise pollutioning</h2>
          <Calendar />
          <SHUSHInfo/>
          
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
