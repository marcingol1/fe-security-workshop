import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { Button, LinearProgress } from '@material-ui/core';

// Configure Firebase.
const config = {
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
  firebase.initializeApp(config);
}

const Wrapper = styled.main`
  display: flex;
  min-height: calc(100vh - 64px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

function Index() {
  const [auth, setAuth] = useState(firebase.auth());
  const [storage, setStorage] = useState(firebase.storage());
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);

  function uploadFile() {
    console.log(auth);
    if (!file) {
      return;
    }
    const ref = storage.ref(auth.currentUser.uid + '/photos/' + file.name);
    const task = ref.put(file);
    task.on('state_changed', snapshot => {
      const percentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    });
    setFile(null);
  }

  function handleNewFile(event) {
    setFile(event.target.files[0]);
  }

  return (
    <Wrapper>
      <div style={{ width: 600 }}>
        <LinearProgress variant="determinate" value={progress} />
        <br />
      </div>
      <input type="file" onChange={handleNewFile} id="fileButton" />
      <Button variant="contained" color="primary" onClick={uploadFile}>
        Upload
      </Button>
    </Wrapper>
  );
}

export default Index;
