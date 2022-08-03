import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classes from './StyledLink.module.css'

const StyledLink = styled(Link)`
    all: unset;
    cursor: pointer;
`;

export default (props) => <StyledLink {...props} />;



