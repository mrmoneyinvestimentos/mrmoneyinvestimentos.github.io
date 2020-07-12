import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../svg/LogoIcon';

import useFirebase from '../../hooks/useFirebase';

export const HeaderStyled = styled.header`
  background-color: #000000;
  z-index: 99;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      padding: 0 !important;
    }
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
    }
  }

  a {
    color: #bf9000;
    font-weight: bold;
    transition: color ease 0.3s;
    &:hover {
      color: #f1b500;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  li a {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
  }

  .logo {
    display: block;
    float: left;
    font-size: 2em;
    max-width: 90px;
    padding: 10px 20px;
    text-decoration: none;
    width: 100%;
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .menu-links {
    text-align: right;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
    position: relative;
    width: 200px;
    left: -50px;
    margin: 0;
    text-align: center;
    margin-bottom: 24px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    li {
      float: left;
    }

    li a {
      padding: 20px 30px;
    }

    .menu {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      max-height: none;
    }

    .menu-icon {
      display: none;
    }
  }
`;

const HeaderLogged = () => {
  const firebase = useFirebase();

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <HeaderStyled className="sticky top-0 shadow">
      <div className="container">
        <a href="/" className="logo">
          <LogoIcon />
        </a>
        <div className="menu-links">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <a href="" onClick={logout}>
                Logout
              </a>
            </li>
            {/* <li>
            <Button className="text-sm">Start Free Trial</Button>
          </li> */}
          </ul>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default HeaderLogged;
