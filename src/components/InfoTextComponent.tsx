import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';
import { ColorPalettes } from '../interfaces/types';
import DBEffects from './DBEffects';
import PositionImg from '../images/DbCountPosition.png';
import  * as TextGroups from '../textFiles/InfoTextGroups';

const TextBoxWhat = styled.div`
  width:1000px; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  background-color:${ColorPalettes.textBoxColor};
  box-sizing: border-box;
  font-size: 23px;
  letter-spacing: 2px;
  line-height: 1.5;
  align-self: flex-start;
  color:${ColorPalettes.textColor};
  white-space: pre-line;
  word-break: break-word;
  font-weight: 900;
  
`;

const ServiceContainer = styled.div`
display: grid; 
grid-template-columns: 1fr; 
grid-template-rows: auto; 
`

const ImgCont = styled.img`
max-width: 600px;
height:auto;
 `


const InfoTextComponent = ({ clickedValue }: { clickedValue: number | null }) =>{


  return(
    <>
      {clickedValue === 1 && (
        <TextBoxWhat> 
          <h2>SHUSH란 무엇인가</h2>
          {TextGroups.whatIsShush}
        </TextBoxWhat>
      )}
      
      {clickedValue === 2 && (
        <TextBoxWhat> 
          <h2>SHUSH가 제공하는 서비스</h2>
          <ServiceContainer>
            {TextGroups.serviceProvided}
          </ServiceContainer>
        </TextBoxWhat>
      )}

      {clickedValue === 3 && (
        <TextBoxWhat> 
          <h2>SHUSH 사용 방법</h2>
          <h3>{TextGroups.howToUseText}</h3>
          
        </TextBoxWhat>
      )}

      {clickedValue === 4 && (
        <TextBoxWhat> 
          <h2>소음측정기 설치 위치</h2>
          {TextGroups.machinePosition}
          <ImgCont src={PositionImg} alt="소음측정기 설치 위치" />
        </TextBoxWhat>
      )}
  </>
  )
};

export default InfoTextComponent;