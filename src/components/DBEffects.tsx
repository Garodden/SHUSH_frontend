import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';
import { ColorPalettes } from '../interfaces/types';

const ColorDBlocks = styled.div`
    width: 30px;
    height: 30px;
    boarder-radius: 5px;
`

const VerticalContainer = styled.div`
    display: flex;
    align-self:flex-start;
    justify-content: center;    
    flex-direction: column;
    `
const HorizontalContainer = styled.div`
    display: flex;
    align-self:flex-start;
    justify-content: center;

    color:${ColorPalettes.textColor};
`


const DBEffects = () => {
    return(
    <>
    <HorizontalContainer>
        
    </HorizontalContainer>
    </>
    );
};

export default DBEffects;