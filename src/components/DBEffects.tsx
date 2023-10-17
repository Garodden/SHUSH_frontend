import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';
import { ColorPalettes } from '../interfaces/types';


const GridPadding = styled.div`
background-color:${ColorPalettes.textBoxColor};
border-radius: 10px;
padding:20px;

`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(auto, auto));
    grid-template-rows: repeat(10, 1fr);
    width: 1000px
    padding: 20px;
    justify-content: center;    
    flex-direction: column;
    font-size: 23px;
    place-items: center;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    
    color:${ColorPalettes.textColor};
    `

const ColorDBlocks = styled.div`
    width: 80px;
    height: 35px;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    color:${ColorPalettes.backGroundColor2};
    
`

const HorizontalContainer = styled.div`
    display: flex;
    align-self:flex-start;
    justify-content: center;

    color:${ColorPalettes.textColor};
`
const ExampleContainer = styled.div`
`
const EffectContatiner = styled.div`
`

const DBEffects = () => {
    return(
    <>
    <GridPadding>
    <GridContainer>
            <ExampleContainer>
                {`나뭇잎 부딪히는 소리`}
            </ExampleContainer>
            <ColorDBlocks color="#33FF57">
                {`20dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`쾌적`}
            </EffectContatiner>

            <ExampleContainer>
                {`조용한 농촌, 심야의 교회`}
            </ExampleContainer>
            <ColorDBlocks>
                {`30dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`수면에 거의 영향 없음`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`조용한 공원`}
            </ExampleContainer>
            <ColorDBlocks>
                {`35dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`수면에 거의 영향 없음`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`조용한 주택의 거실`}
            </ExampleContainer>
            <ColorDBlocks>
                {`40dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`수면 깊이 낮아짐`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`조용한 사무실`}
            </ExampleContainer>
            <ColorDBlocks>
                {`50dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`호흡/맥박수 증가, 계산력 저하`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`보통의 대화소리, 백화점 내 소음`}
            </ExampleContainer>
            <ColorDBlocks>
                {`60dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`임상적 건강영향(만성 노출)`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`전화벨소리, 거리, 시끄러운 사무실`}
            </ExampleContainer>
            <ColorDBlocks>
                {`70dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`정신 집중력 저하, 말초혈관 수축`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`철로변 및 지하철 소음`}
            </ExampleContainer>
            <ColorDBlocks>
                {`80dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`청력 장애 시작(만성 노출)`}
            </EffectContatiner>
       
            <ExampleContainer>
                {`소음이 심한 공장 안`}
            </ExampleContainer>
            <ColorDBlocks>
                {`90dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`작업성 난청 시작, 소변량 증가`}
            </EffectContatiner>
        
            <ExampleContainer>
                {`착암기, 경적소리`}
            </ExampleContainer>
            <ColorDBlocks>
                {`100dB`}
            </ColorDBlocks>
            <EffectContatiner>
                {`단시간 노출시 일시적 난청`}
            </EffectContatiner>
    </GridContainer>
    </GridPadding>
    </>
    );
};

export default DBEffects;