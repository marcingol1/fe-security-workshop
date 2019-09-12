import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import {
  Button,
  LinearProgress,
  Paper,
  Typography,
  TextField
} from '@material-ui/core';
import {
  Wrapper,
  ProgressWrapper,
  UploadPaper
} from '../components/layout.styled';
import Upload from '../components/upload';

function Index() {
  const [auth] = useState(firebase.auth());
  const [storage] = useState(firebase.storage());
  const [db] = useState(firebase.firestore());
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [fileRef, setFileRef] = useState(null);
  const [name, setName] = useState('test');
  const [description, setDescription] = useState('test desc');

  function uploadFile() {
    if (!name) {
      return;
    }

    // name could be possible way to store XSS in here?
    const ref = storage.ref(auth.currentUser.uid + '/photos/' + name);
    const task = ref.put(fileRef);
    if (fileRef.size > 100000) {
      console.log('No big files, you tricky one');
      return;
    }
    task.on(
      'state_changed',
      snapshot => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      () => {},
      async () => {
        const url = await ref.getDownloadURL();
        db.collection('photos').add({
          date: new Date(),
          user: auth.currentUser.email,
          url,
          uid: auth.currentUser.uid,
          file: fileRef.size < 30000 ? file : null,
          fileName: name,
          fileDescription: description
        });
      }
    );
    setFileRef(null);
  }

  return (
    <Wrapper>
      <ProgressWrapper>
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={progress}
        />
      </ProgressWrapper>
      <UploadPaper elevation={8}>
        <Typography align="center" variant="h3" color="secondary">
          Upload new photo
        </Typography>
        <TextField
          label="Name"
          style={{ margin: '4em 0 0 0' }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          rowsMax="4"
          value={description}
          fullWidth
          onChange={event => setDescription(event.target.value)}
          margin="normal"
        />
        <Upload file={file} setFile={setFile} setFileRef={setFileRef} />
        <Button variant="contained" color="primary" onClick={uploadFile}>
          Upload
        </Button>
      </UploadPaper>
    </Wrapper>
  );
}

export default Index;
