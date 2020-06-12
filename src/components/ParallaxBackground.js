import React from 'react';
import styled from 'styled-components';

export const StyledParallax = styled.section`
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function ParallaxBackground({ background, height }) {
  return <StyledParallax style={{ backgroundImage: `url(${background})`, height }} />;
}

export default ParallaxBackground;
