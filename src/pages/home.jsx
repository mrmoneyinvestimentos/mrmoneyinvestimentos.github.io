import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Jitsi from 'react-jitsi';

import { Form, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import HeaderLogged from '../components/layout/HeaderLogged';
import LoaderMeeting from '../components/LoaderMeeting';

import useFirebase from '../hooks/useFirebase';

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

  .meeting-title {
    background: #070a0d;
    box-shadow: 0 1px 13px 6px #424242;
    color: white;
    font-size: 20px;
    left: 0;
    padding: 15px;
    position: absolute;
    text-align: center;
    top: 51vh;
    width: 100vw;
    z-index: 999;

    @media screen and (min-width: 1024px) {
      font-size: 2.5rem;
      left: -90px;
      top: 44vh;
    }
  }

  button {
    max-width: 350px;
    margin: 24px auto;
    width: 100%;
  }

  #react-jitsi-frame {
    display: block!important;
    height: calc(100vh - 70px)!important;
    border: 0px none;
    left: -15px;
    position: relative;
    width: 100vw!important;
    @media screen and (min-width: 1024px) {
      left: -90px;
    }
  }

  #react-jitsi-container .copy-meeting {
    display: none!important;
    z-index: -1!important;
    opacity: 0!important;
  }
`;

const Home = () => {
  const firebase = useFirebase();

  const [onCall, setOnCall] = useState(false);
  const [joinedUser, setJoined] = useState(false);
  const [userLeft, setUserLeft] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!firebase) return;
    checkUser();
  }, [])

  const checkUser = () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      navigate('/login');
      return null;
    }
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

  const handleAPI = JitsiMeetAPI => {
    setUserLeft(false);
    JitsiMeetAPI.addEventListener('videoConferenceJoined', () => {
      setJoined(true);
    });
    JitsiMeetAPI.addEventListener('readyToClose', () => {
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
                        'videoquality',
                        'raisehand'
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
