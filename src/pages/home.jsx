import React, { useEffect, useContext } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { navigate } from 'gatsby';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Form, Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout/Layout';
import HeaderLogged from '../components/layout/HeaderLogged';
import ZoomVideo from '../components/ZoomVideo';

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
              <section className="watch-live">
                <p>some text</p>
                <div id="zmmtg-root" />
                <ZoomVideo />
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
