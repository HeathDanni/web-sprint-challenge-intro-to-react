// Write your Character component here
import React from "react";
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: #F5F5DC;
    border: 1px solid #FF7F50;
    margin: 10px 300px;
    font-size: 20px;
`
const CharacterName = styled.h2`
    color: #A52A2A;
    margin-bottom: 3px;
`
const CharInfo = styled.span`
    color: #6495ED;
`

const Character = (props) => {
    return <StyledContainer>
        <CharacterName>{props.name}</CharacterName>
        <CharInfo>Birth year: {props.year}</CharInfo><br></br>
        <CharInfo>Eye color: {props.eye}</CharInfo><br></br>
        <CharInfo>Hair color: {props.hair}</CharInfo>
    </StyledContainer>
}

export default Character;