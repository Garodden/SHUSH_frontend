import {Link} from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Calendar from "./components/Calender";
import backgroundImage from './images/background_2.png';
import InfoComponent from "./components/InfoComponent";
import { ColorPalettes } from "./interfaces/types";
import ImgShushLogo from './images/img_shush_logo.png'

const BackgroundStyle = styled.div`
  width: 100%;
  height: 250%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to top, ${ColorPalettes.backGroundColor2},${ColorPalettes.chartFillColor2}); 
  position: absolute;
  z-index: -3;
  // Flex 설정
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: flex-start; 

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  
`;

const BackgroundStyle2 = styled.div`
  width: 100vw;
  height: 100vh;
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
    width: 100%;
    height: 150vh;
   
    position: absolute;
    z-index: -2;  // 다른 요소들 뒤에 위치하도록
    display: flex;
`

const ImageContainer = styled.div`
width: 120px; 
height: 120px;
border-radius: 50%;
overflow: hidden;
cursor: pointer; 
background-color:white;
align-self: center;
z-axis = 3;
margin:20px;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
const TitleTwoRowGrid= styled.div`
width: 100%; // 상대적 너비 설정
  max-width: 1270px; // 최대 너비 제한
  display: grid; 
  grid-template-columns: min-content auto; 
  grid-template-rows: auto; 
  margin: 0 auto; // 중앙 정렬

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
    text-align: center; // 텍스트 중앙 정렬
  }
`;


const TitleBox = styled.div`
  width: 1fr;
  text-align: left;
  color: white;

  @media screen and (max-width: 768px) {
    text-align: center; 
  }
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
      <BackgroundStyle>
        
        <TitleTwoRowGrid>
          <ImageContainer>
            <img src={ImgShushLogo}/>
          </ImageContainer>
          <TitleBox>
            <StyledH1>SHUSH</StyledH1>
            <StyledH3> SOCIAL PROBLEM-SOLVING PROJECT</StyledH3>
            <StyledH2>know your local noise polluting</StyledH2>
          </TitleBox>  
        </TitleTwoRowGrid>
        <Calendar />
        <InfoComponent/>
        
      </BackgroundStyle>
    </>
  );

}

export default App;
