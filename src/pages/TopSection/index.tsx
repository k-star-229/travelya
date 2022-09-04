import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopSectionContainer = styled.div`
  ${tw`
    w-full
    flex
    h-screen
    relative
  `};
`;

export function TopSection() {
  return <TopSectionContainer></TopSectionContainer>
}