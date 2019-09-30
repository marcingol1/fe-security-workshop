import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import config from '../config';

const RegisterWrapper = styled.main`
  display: grid;
  justify-content: center;
  width: 50%;
`;

let db;
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(config);
  db = firebase.firestore();
}

function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!db) {
      if (!db) {
        console.warn('databse not started');
      }
      return;
    }
  });

  useEffect(() => {
    if (!db) {
      console.warn('databse not started');
      return;
    }
  });

  return (
    <RegisterWrapper>
      <h1>Register here</h1>
      <label htmlFor="login-input">Login: </label>
      <input
        id="login-input"
        value={login}
        onChange={({ target }) => setLogin(target.value)}
      />
      <label htmlFor="password-input">Password: </label>
      <input
        id="password-input"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        type="password"
      />
    </RegisterWrapper>
  );
}

export default Register;
