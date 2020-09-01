// Write your Character component here
import React from "react";
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: red;
`

const Character = (props) => {
    return <StyledContainer>
        <h2>{props.name}</h2><span>{props.year}</span>
    </StyledContainer>
}

export default Character;