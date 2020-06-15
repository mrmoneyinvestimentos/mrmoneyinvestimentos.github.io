import React from 'react';

import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #bf9000;
  transition: background-color ease 0.3s;
  &:hover {
    background-color: #a57c00;
  }
`;

const LinkButtonStyled = styled.a`
  background-color: #bf9000;
  position: relative;
  transition: background-color ease 0.3s;
  top: 24px;
  &:hover {
    background-color: #a57c00;
    color: #fff;
    text-decoration: none;
  }
`;

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, btnLink }) => {
  return btnLink ? (
    <LinkButtonStyled
      href={btnLink}
      target="_blank"
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
    </LinkButtonStyled>
  ) : (
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
