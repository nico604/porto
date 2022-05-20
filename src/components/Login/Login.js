import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { Form, Input, FormGroup, Button } from 'reactstrap';
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  padding: 3em;
`;

export default function Login(){
  
  const [user, setUser] = useState("");
  const [password,setPassword] = useState("");

  function validateForm() {
    if(password ==='allo'){
      return user.length > 0 && password.length > 0;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const  userr  = user;
    const  pass  = password;
      if (userr && userr.trim() && pass && pass.trim()) {
        localStorage.setItem('token', '123');
      }
  }

  return(
    <Container id="container">
      <div id="ecranPremier">
        <h1>Bienvenue</h1>
        <div className={styles.Login} data-testid="Login">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input 
                id="user"
                name="user"
                value={user}
                placeholder="Utilisateur"
                type="text"
                onChange={(e) => setUser(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Input 
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Entrer
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  )
}
  

