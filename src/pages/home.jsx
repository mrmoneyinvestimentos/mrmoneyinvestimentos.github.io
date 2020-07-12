import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';
import Jitsi from 'react-jitsi';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Form, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import HeaderLogged from '../components/layout/HeaderLogged';
import LoaderMeeting from '../components/LoaderMeeting';

const StyledJitsi = styled(Jitsi)`
  .premeeting-screen .content .copy-meeting {
    display: none;
    z-index: -1;
    opacity: 0;
  }
`;

const StyledContent = styled(Col)`
  &.content-center {
    height: calc(100vh - 70px);
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  button {
    max-width: 350px;
    margin: 24px auto;
    width: 100%;
  }
`;

const Home = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [onCall, setOnCall] = useState(false);
  const [joinedUser, setJoined] = useState(false);
  const [userLeft, setUserLeft] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const queryMeetingInfo = useStaticQuery(graphql`
    query {
      allContentfulMeetingConfiguracoes(
        filter: { node_locale: { eq: "en-US" } }
        sort: { order: DESC }
      ) {
        edges {
          node {
            id
            name
            password
          }
        }
      }
    }
  `);

  console.log(queryMeetingInfo);

  const handleAPI = JitsiMeetAPI => {
    setUserLeft(false);
    JitsiMeetAPI.addEventListener('videoConferenceJoined', () => {
      console.log('ENTREI!!!!');
      setJoined(true);
    });
    JitsiMeetAPI.addEventListener('readyToClose', () => {
      console.log('Sairr!!!!');
      setUserLeft(true);
      navigate('/left');
    });
  };

  return (
    <>
      <HeaderLogged />
      <Layout>
        <Container>
          <Row>
            <StyledContent xs={12} md={12} className={onCall ? '' : 'content-center'}>
              {onCall && queryMeetingInfo ? (
                <>
                  <h1 className={`meeting-title ${!joinedUser ? '' : 'd-none'}`}>
                    Digite seu nome abaixo para ser identificado!
                  </h1>
                  <StyledJitsi
                    roomName={queryMeetingInfo?.allContentfulMeetingConfiguracoes?.edges[0]?.node?.name}
                    loadingComponent={LoaderMeeting}
                    onAPILoad={handleAPI}
                    config={{
                      startAudioOnly: false
                    }}
                    interfaceConfig={{
                      TOOLBAR_BUTTONS: [
                        'microphone',
                        'camera',
                        'fullscreen',
                        'tileview',
                        'hangup',
                        'profile',
                        'chat',
                        'videoquality'
                      ],
                      disableInviteFunctions: true
                    }}
                  />
                </>
              ) : (
                <>
                  <h1>Clique em acessar para entrar em nossa reunião!</h1>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setOnCall(true);
                    }}
                  >
                    Entrar!
                  </button>
                </>
              )}
            </StyledContent>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
