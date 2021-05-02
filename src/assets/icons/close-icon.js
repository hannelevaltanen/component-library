import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
    width: 100%;
    height: 100%;

    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;

`;

export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </CloseIconWrapper>
);
