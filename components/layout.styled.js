import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Wrapper = styled.main`
  display: grid;

  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

export const ProgressWrapper = styled.div`
  width: 100vw;
  position: sticky;
  top: 70px;
  left: 0;
`;

export const UploadPaper = styled(Paper)`
  padding: 3em;
  margin: 3em;
  width: 50vw;
  justify-self: center;
  display: grid;
`;
