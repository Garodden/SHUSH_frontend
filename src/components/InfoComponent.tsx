import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ColorPalettes } from '../interfaces/types';
import ImgShushLogo from '../images/img_shush_logo.png';
import ImgChartLogo from '../images/img_chart_logo.png';
import ImgMapLogo from '../images/img_map_logo.jpg';
import ImgServiceLogo from '../images/img_service_logo.png';

const InfoContainer = styled.div`
width: 1270px;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
background-color:${ColorPalettes.mainContainerColor};
border-radius: 10px;
gap: 10px;
`
const ImgButtonsContainer = styled.div`
display: grid; 
grid-template-columns: auto; 
grid-template-rows: 1fr 1fr 1fr 1fr ; 
gap: 50px; 
margin: 30px;

`

const ImageButton = styled.div`
width: 120px;   /* 원하는 너비 설정 */
height: 120px;  /* 너비와 같게 설정하여 원형을 유지 */
border-radius: 50%;     /* 원형 모양 생성 */
overflow: hidden;       /* 이미지가 컨테이너 밖으로 나가지 않도록 함 */
cursor: pointer;        /* 마우스 오버 시 커서 변경 */
background-color:white;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;    /* 이미지 비율 유지하면서 컨테이너에 맞춤 */
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
`;

const ReactivetextBox = styled.div`

`

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container') as HTMLElement;
    const textContainer = document.querySelector('.text-container') as HTMLElement;
  
    // 요소가 존재하는지 확인
    if (imageContainer && textContainer) {
      imageContainer.addEventListener('click', () => {
        textContainer.textContent = '원하는 텍스트';
      });
    }
  });


function InfoComponent(){

    return (
        <InfoContainer>
            <ImgButtonsContainer>
            <ImageButton>
                <img src={ImgShushLogo} alt="SHUSH란 무엇인가?" />
            </ImageButton>
            <ImageButton>
                <img src={ImgServiceLogo} alt="SHUSH가 제공하는 서비스" />
            </ImageButton>
            <ImageButton>
                <img src={ImgChartLogo} alt="소음 수치 별 영향"/>
            </ImageButton>
            <ImageButton>
                <img src={ImgMapLogo} alt="소음측정기 설치 위치" />
            </ImageButton>
            </ImgButtonsContainer>

            <ReactivetextBox>
            <TextBoxWhat>
        <h2>SHUSH란 무엇인가</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>
        {`오랜 시간 동안, 학교 주변 상권과 주거지를 중심으로 소음을 유발하는 상황들이 수시로 빈번하게 발생하면서 소음 공해에 대한 문제 해결 방안이 지속적으로 요구되어 왔습니다.

교내 학생들의 상당수가 사용하는 커뮤니티 애플리케이션인 ‘에브리타임’ 자유게시판에서는 이와 같은 문제에 대한 항의 글이 자주 올라왔지만, 본질적인 문제를 해결할 방안이 구체적으로 마련되지 않았는데요. 소음 공해 발생 시 문제해결로 피해 학생들이 직접 경찰에 신고하는 방법뿐이었기에 실생활 속에서 쉽게 접할 수 있는 방안으로 문제를 해결하고자 SHUSH프로젝트를 시작하게 되었습니다. 

SHUSH는 여러분이 소음 공해에 노출되는 것을 예방하고 피해를 인식할 수 있도록 정보를 제공하는 서비스입니다.
소음 피해 의식은 지극히 주관적인 것이기 때문에 몇몇 소음에 둔감한 분들은 해당 문제가 공해의 성격을 띠지 않는다고 할 수도 있습니다. 이처럼 소음 공해 피해 여부는 개인과 개인이 첨예하게 대립할 수 있는 사항이므로 소음 기준을 더욱 명확하게 하고, 이를 가시화하여 소음으로 인한 피해 상황을 방지하는 것이 필요하다고 생각했습니다. 따라서 소음측정기로 수집한 객관적인 지표를 활용하여 소음 발생 문제를 책임자들이 인식할 수 있도록 하는 것이 프로젝트의 목표입니다.  
`}</div>

      </TextBoxWhat>
            </ReactivetextBox>

        </InfoContainer>

    );
}

export default InfoComponent;