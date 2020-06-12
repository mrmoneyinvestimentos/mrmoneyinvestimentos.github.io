import React from 'react';

import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: #bf9000;
  transition: background-color ease 0.3s;
  &:hover {
    background-color: #a57c00;
  }
`;

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <ButtonStyled
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
