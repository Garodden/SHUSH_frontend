import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';
import { ColorPalettes } from '../interfaces/types';


const GlobalFonts = createGlobalStyle`
  @font-face {
      font-family: 'HakgyoansimWoojuR';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
`;

const ContainerWhole = styled.div`
  width:1230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  gap:20px;
  padding:20px;
  background-color: ${ColorPalettes.mainContainerColor}
`;

const ContainerVertical = styled.div`
  width:1,170px;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self:flex-start;
  
  gap: 20px; // 각 텍스트 박스 사이의 간격
`;

const ContainerHorizontal = styled.div`
  width:1,170px;  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; // 각 텍스트 박스 사이의 간격
`;

const TextBox = styled.div`
  width:1000px; 
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
  
`;

const TextBoxHrizontal = styled.div`
  width:615px; 
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
  
`;


const SHUSHInfo = () => {
  return (
    <>
    <ContainerWhole>
    <ContainerVertical>
      <TextBox>
        <h2>SHUSH란 무엇인가</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>
        {`오랜 시간 동안, 학교 주변 상권과 주거지를 중심으로 소음을 유발하는 상황들이 수시로 빈번하게 발생하면서 소음 공해에 대한 문제 해결 방안이 지속적으로 요구되어 왔습니다.

교내 학생들의 상당수가 사용하는 커뮤니티 애플리케이션인 ‘에브리타임’ 자유게시판에서는 이와 같은 문제에 대한 항의 글이 자주 올라왔지만, 본질적인 문제를 해결할 방안이 구체적으로 마련되지 않았는데요. 소음 공해 발생 시 문제해결로 피해 학생들이 직접 경찰에 신고하는 방법뿐이었기에 실생활 속에서 쉽게 접할 수 있는 방안으로 문제를 해결하고자 SHUSH프로젝트를 시작하게 되었습니다. 

SHUSH는 여러분이 소음 공해에 노출되는 것을 예방하고 피해를 인식할 수 있도록 정보를 제공하는 서비스입니다.
소음 피해 의식은 지극히 주관적인 것이기 때문에 몇몇 소음에 둔감한 분들은 해당 문제가 공해의 성격을 띠지 않는다고 할 수도 있습니다. 이처럼 소음 공해 피해 여부는 개인과 개인이 첨예하게 대립할 수 있는 사항이므로 소음 기준을 더욱 명확하게 하고, 이를 가시화하여 소음으로 인한 피해 상황을 방지하는 것이 필요하다고 생각했습니다. 따라서 소음측정기로 수집한 객관적인 지표를 활용하여 소음 발생 문제를 책임자들이 인식할 수 있도록 하는 것이 프로젝트의 목표입니다.  
`}</div>

      </TextBox>
      <TextBox>
        <h2>SHUSH가 제공하는 서비스</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>
          {`SHUSH는 소음이 자주 발생하는 학교 주변 지역에 소음측정기를 설치해 실시간/일간 /주간 소음데이터를 수집하여 그래프로 나타냅니다.
소음 그래프에 표시되는 각 수치는 다음과 같이 구분되어 있습니다. (단위: dB(데시벨))
  
  ● 30 ~ 45 dB : (good) 소음이 정상 수치에 있습니다. 
    (예시: 냉장고 소리, 벽시계 소리)
  ● 46 ~ 65 dB : (soso) 소음이 경고 수치에 있습니다. 소음에 주의해 주세요. 
    (예시: 보통의 대화 소리)
  ● 66 ~ 80 dB : (bad)  소음 수치가 매우 나쁩니다. 조용히 하는 것을 권고드립니다. 
    (예시: 매미 소리)

본 소음 기준은 국가소음정보시스템의 소음진동기준을 참고하였습니다.`}
        </div>
      </TextBox>
    </ContainerVertical>
    <ContainerHorizontal>
      <TextBoxHrizontal>
      <h2>소음측정기 설치 위치</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>
          {`소음측정기는 소음이 주로 많이 발생하는 지역인 한마음 마트 앞/ 욱일 뒤/ 농심국제관 뒤에 설치되어 주기적으로 소음 데이터를 수집할 예정이고 실시간 소음전광판은 
한마음 마트 앞에만 상시 설치합니다. `}
          </div>
      </TextBoxHrizontal>
      <TextBoxHrizontal>
        <h2>SHUSH 사용 방법</h2>
        <h3>주기적으로 홈페이지를 참고하여 소음데이터의 변화를 확인해주세요</h3>
      </TextBoxHrizontal>
    </ContainerHorizontal>
    </ContainerWhole>
    </>
  );
};

export default SHUSHInfo;



