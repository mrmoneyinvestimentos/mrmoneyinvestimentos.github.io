import React, { useState, useContext } from 'react';
import firebase from "gatsby-plugin-firebase"
import { Form, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { navigate } from 'gatsby'

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const LabelStyled = styled(Form.Label)`
  color: #424242;
  font-size: 0.8rem;
  font-weight: bold;
  left: 9px;
  position: relative;
  padding: 0 5px;
  z-index: 3;
`;

const ContainerLogin = styled(Container)`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 70vh;

  .col-md-8 {
    width: 80vw;
  }

  form {
    box-shadow: 0 0px 4px 0px rgba(66, 66, 66, 0.28);
    border-radius: 4px;
    padding: 50px;
  }
`;

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [user, loading, error] = useAuthState(firebase.auth());

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formValues)
    firebase.auth().signInWithEmailAndPassword(formValues.email, formValues.password);
    navigate('/home');
  }

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
  if (user) {
    navigate('/home');
    return null;
  }

  return (
    <>
      <Header />

      <ContainerLogin>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>      
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group as={Col} className="p-0">
                <LabelStyled>Endereço de e-mail</LabelStyled>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  name="email"
                  required
                  value={formValues?.email || ''}
                  onChange={e =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} className="p-0">
                <LabelStyled>Senha</LabelStyled>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                  required
                  value={formValues?.password || ''}
                  onChange={e =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                />
              </Form.Group>

              <a href="/" className="forgot-link">
                Esqueceu sua senha?
              </a>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={!formValues?.email || !formValues?.password}
              >
                Entrar
              </button>
            </Form>
          </Col>
        </Row>
      </ContainerLogin>

      <Footer />
    </>
  );
};

export default Login;
