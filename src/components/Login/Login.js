import React, { useState,  } from 'react';
import styles from './Login.module.css';
import { Form, Input, FormGroup, Button } from 'reactstrap';

const Login = ({ onSubmit }) => {


  const [user, setUser] = useState("");
  const [password,setPassword] = useState("");

  function validateForm() {
    if(password ==='ciment'){
      return user.length > 0 && password.length > 0;
    }
  }

  return(

    <Form onSubmit={onSubmit} className={styles.Login} data-testid="Login" >
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
  )
}
export default Login