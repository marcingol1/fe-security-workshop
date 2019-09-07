import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Image = styled.img`
  height: 600px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  padding: 2em;
`;

function Upload({ file, setFile, setFileRef }) {
  function handleNewFile(event) {
    if (!event.target.files.length) {
      return;
    }
    setFileRef(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      setFile(e.target.result);
    };
  }

  return (
    <ImageWrapper>
      <label htmlFor="raised-button-file">
        <Button variant="contained" color="secondary" component="span">
          Choose photo
        </Button>
      </label>
      <Image src={file} />
      <input
        accept="image/*"
        id="raised-button-file"
        multiple
        type="file"
        style={{ display: 'none' }}
        onChange={handleNewFile}
      />
    </ImageWrapper>
  );
}

export default Upload;
