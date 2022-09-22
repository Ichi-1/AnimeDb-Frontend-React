import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    font-weight: normal;
    font-size: 14px;
    gap: 4px;
    cursor: pointer;

    color: #123;
    &:hover {
        color:rgb(248, 89, 21);
    }
    
`;


const Brackets = styled.div`
    &:before {
        content: "(";
        color:#acb1b4;
    }

    &:after {
        content: ")";
        color: #acb1b4;
    }
`;


export const Category = ({name, count}) => {
  return (
    <Container>
        {name}<Brackets>{count}</Brackets>
        <span style={{marginRight:"7px", marginLeft:"5px"}}>/</span> 
    </Container>
  )
}
