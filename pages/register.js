import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import styled from 'styled-components';
import 'firebase/firestore';

const RegisterWrapper = styled.main`
  display: grid;
  justify-content: center;
  width: 50%;
`;

const firebaseConfig = {
  apiKey: 'AIzaSyC2F773_xDR-cMnu8VLIlm4gT9xHIMbL1M',
  authDomain: 'fe-security.firebaseapp.com',
  databaseURL: 'https://fe-security.firebaseio.com',
  projectId: 'fe-security',
  storageBucket: 'fe-security.appspot.com',
  messagingSenderId: '210195962261',
  appId: '1:210195962261:web:6ed9a396eac35c9c'
};

let db;

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
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
    /* db.collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      }); */
  });

  useEffect(() => {
    if (!db) {
      console.warn('databse not started');
      return;
    }
    db.collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc);
        });
      });
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
