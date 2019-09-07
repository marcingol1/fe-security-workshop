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
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [fileRef, setFileRef] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function uploadFile() {
    if (!name) {
      return;
    }
    const ref = storage.ref(auth.currentUser.uid + '/photos/' + name);
    const task = ref.put(fileRef);
    task.on('state_changed', snapshot => {
      const percentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    });
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
      <UploadPaper elevation="8">
        <Typography align="center" variant="h3" color="secondary">
          Upload new photo
        </Typography>
        <TextField
          label="Name"
          style={{ margin: '4em 0 0 0' }}
          placeholder="Name of the file"
          helperText="Enter name of the file here!"
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
