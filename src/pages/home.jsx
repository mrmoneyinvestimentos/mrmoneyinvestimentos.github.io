import React, { useState, useContext } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { navigate } from 'gatsby';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Form, Col, Container, Row } from 'react-bootstrap';

import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import HeaderLogged from '../components/layout/HeaderLogged';

const Home = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <>
      <HeaderLogged />
      <Layout>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h1>Logado!</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
