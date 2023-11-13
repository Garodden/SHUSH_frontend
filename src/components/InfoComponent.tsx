import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ColorPalettes } from '../interfaces/types';
import ImgShushLogo from '../images/img_shush_logo.png';
import ImgChartLogo from '../images/img_chart_logo.png';
import ImgMapLogo from '../images/img_map_logo.jpg';
import ImgServiceLogo from '../images/img_service_logo.png';

const InfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
gap: 10px;
`
const ImgButtonsContainer = styled.div`
display: grid; 
grid-template-columns: auto; 
grid-template-rows: 1fr 1fr 1fr 1fr ; 
gap: 10px; 

`

const ImageButton = styled.div`
width: 100px;   /* 원하는 너비 설정 */
height: 100px;  /* 너비와 같게 설정하여 원형을 유지 */
border-radius: 50%;     /* 원형 모양 생성 */
overflow: hidden;       /* 이미지가 컨테이너 밖으로 나가지 않도록 함 */
cursor: pointer;        /* 마우스 오버 시 커서 변경 */

img {
  width: 100%;
  height: 100%;
  object-fit: cover;    /* 이미지 비율 유지하면서 컨테이너에 맞춤 */
}
`


const ReactivetextBox = styled.div`

`

const imageContainer = document.querySelector('.image-container') as HTMLElement;
const textContainer = document.querySelector('.text-container') as HTMLElement;

imageContainer.addEventListener('click', () => {
  textContainer.textContent = '원하는 텍스트';
});


function InfoComponent(){

    return (
        <InfoContainer>
            <ImgButtonsContainer>
            <ImageButton>
                <img src="ImgShushLogo" alt="SHUSH란 무엇인가?" />
            </ImageButton>
            <ImageButton>
                <img src="ImgServiceLogo" alt="SHUSH가 제공하는 서비스" />
            </ImageButton>
            <ImageButton>
                <img src="ImageChartLogo" alt="소음 수치 별 영향"/>
            </ImageButton>
            <ImageButton>
                <img src="ImgMapLogo" alt="소음측정기 설치 위치" />
            </ImageButton>
            </ImgButtonsContainer>

            <ReactivetextBox>

            </ReactivetextBox>

        </InfoContainer>

    );
}

export default InfoComponent;