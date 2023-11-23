import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ColorPalettes } from '../interfaces/types';
import ImgShushLogo from '../images/img_shush_logo.png';
import ImgChartLogo from '../images/img_chart_logo.png';
import ImgMapLogo from '../images/img_map_logo.png';
import ImgServiceLogo from '../images/img_service_logo.png';
import InfoTextComponent from './InfoTextComponent';

const InfoContainer = styled.div`
width: 100%;  
max-width: 1270px; 
min-width:400px; 

display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
background-color:${ColorPalettes.mainContainerColor};
border-radius: 10px;
gap: 10px;

@media screen and (max-width: 768px) {
  grid-template-columns: auto; 
  gap: 20px;
}

`
const ImgButtonsContainer = styled.div`
 display: grid; 
 grid-template-columns: auto; // 4개의 열로 변경
 grid-template-rows: repeat(4, 1fr);   
gap: 20px; 
margin: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: auto;             
    gap: 20px;                            
  }
`

const ImageButton = styled.div`
width: 100px;  // 너비 조정
height: 100px; // 높이 조정
border-radius: 50%;
overflow: hidden;
cursor: pointer;
background-color: white;
align-self: center;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  width: 60px;  
  height: 60px; 
}
`
const TextBoxWhat = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  background-color:${ColorPalettes.textBoxColor};
  box-sizing: border-box;
  font-family: 'HakgyoansimWoojuR', sans-serif;
  font-size: 23px;
  letter-spacing: 2px;
  line-height: 1.5;
  align-self: flex-start;
  color:${ColorPalettes.textColor};
  margin:20px;

  @media screen and (max-width: 768px) {
    margin:0px;
  }
  
`;

const ReactivetextBox = styled.div`
  margin: 30px;
  width: 100%; 

  @media screen and (max-width: 768px) {
    margin:0px;
  }
`;

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container') as HTMLElement;
    const textContainer = document.querySelector('.text-container') as HTMLElement;
  
    // 요소가 존재하는지 확인
    if (imageContainer && textContainer) {
      imageContainer.addEventListener('click', () => {
      });
    }
  });


function InfoComponent(){
  const [ clickedValue, setClickedValue] = useState<number | null>(1);

    return (
        <InfoContainer>
            <ImgButtonsContainer>

            <ImageButton onClick={() => setClickedValue(1)}>
                <img src={ImgShushLogo} alt="SHUSH란 무엇인가?" />
            </ImageButton>

            <ImageButton onClick={() => setClickedValue(2)}>
                <img src={ImgServiceLogo} alt="SHUSH가 제공하는 서비스" />
            </ImageButton>

            <ImageButton onClick={() => setClickedValue(3)}>
                <img src={ImgChartLogo} alt="소음 수치 별 영향"/>
            </ImageButton>

            <ImageButton onClick={() => setClickedValue(4)}>
                <img src={ImgMapLogo} alt="소음측정기 설치 위치" />
            </ImageButton>

            </ImgButtonsContainer>
            <ReactivetextBox>
            <InfoTextComponent clickedValue={clickedValue}/>
            </ReactivetextBox>

        </InfoContainer>

    );
}

export default InfoComponent;