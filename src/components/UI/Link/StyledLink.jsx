import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    /* all: unset; */
    cursor: pointer;
    text-decoration: none;
    color: #176093;
    

    &:hover {
        color:rgb(248, 89, 21);
    }
    
`;

export default (props) => <StyledLink {...props} />;



