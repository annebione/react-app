import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
   width: 200px;
   margin: 10px 0;
   margin: 0 auto;
   padding: 10px 0;
   font-size: 20px;
   background-color: ${props => props.backgroundColor};
   color: ${props => props.color};
   border-radius: 3px;
   cursor: pointer;
   &:active {
    background-color:#423865;
   }
}
`

const Button = ({ children, color, backgroundColor, onClick }) => (
    <StyledButton color = {color} backgroundColor = {backgroundColor} onClick={onClick}>
        { children }
    </StyledButton>
 )

export default Button

