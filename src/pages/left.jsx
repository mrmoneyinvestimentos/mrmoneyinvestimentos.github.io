import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';
import Jitsi from 'react-jitsi';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import HeaderLogged from '../components/layout/HeaderLogged';

const StyledContent = styled(Col)`
  height: calc(100vh - 70px);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }
`;

const Left = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  // if (!user) {
  //   navigate('/login');
  //   return null;
  // }

  return (
    <>
      <HeaderLogged />
      <Layout>
        <Container>
          <Row>
            <StyledContent xs={12} md={12}>
              <h1>Obrigado por participar!</h1>
              <Link to="/home">Voltar página inicial</Link>
            </StyledContent>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Left;
