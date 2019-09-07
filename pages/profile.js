import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import {
  Button,
  LinearProgress,
  Typography,
  Grid,
  TextField
} from '@material-ui/core';
import { Wrapper } from '../components/layout.styled';

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

function Profile() {
  const [auth, setAuth] = useState(firebase.auth());
  const [storage, setStorage] = useState(firebase.storage());
  const [store, setStore] = useState(firebase.firestore());
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    async function fetchImage() {
      const profileImageRef = storage.ref(
        auth.currentUser.uid + '/profile/photo.jpg'
      );
      /* const url = await profileImageRef.getDownloadURL();
      setFile(url); */
    }
    fetchImage();
    store
      .collection('users')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data());
        });
      });
  });

  function uploadFile() {
    if (!file) {
      return;
    }
    const ref = storage.ref(auth.currentUser.uid + '/profile/photo.jpg');
    const task = ref.put(file);
    task.on('state_changed', snapshot => {
      const percentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    });
    setFile(null);
  }

  function handleNewFile(event) {
    if (!event.target.files.length) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      setFile(e.target.result);
    };
  }

  return (
    <Wrapper>
      <Typography variant="h3" color="primary">
        {auth.currentUser.email}
      </Typography>
      <img src={file} />
      <div style={{ width: 600, paddingTop: 50 }}>
        <LinearProgress variant="determinate" value={progress} />
        <br />
      </div>
      <Typography variant="body1">Change profile photo </Typography>
      <input type="file" onChange={handleNewFile} id="fileButton" />
      <Typography variant="body2">or input link</Typography>
      <TextField
        value={fileUrl}
        onChange={event => setFileUrl(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={uploadFile}>
        Upload
      </Button>
    </Wrapper>
  );
}

export default Profile;
