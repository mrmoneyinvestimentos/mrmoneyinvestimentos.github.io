import React from 'react';
import styled from 'styled-components';

export const SplitStyled = styled.section`
  b {
    color: #8a6800;
  }
`;

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <SplitStyled id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </SplitStyled>
);

export default SplitSection;
