// Import FirebaseAuth and firebase.
import React, { useState } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Typography,
  Button,
  InputLabel,
  Input,
  Paper,
  CircularProgress,
  CssBaseline,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

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

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

const FullScreenWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledPaper = styled(Paper)`
  height: 35vh;
  min-width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  padding: 2em;
  margin: 2em;
  display: grid;
  grid-gap: 1em;
`;

const Logo = styled.img`
  width: ${props => (props.small ? '70px' : '200px')};
  height: ${props => (props.small ? '70px' : '150px')};
  padding: ${props => (props.small ? '0 1em' : '2em')};
  object-fit: contain;
  -webkit-filter: hue-rotate(210deg);
  filter: hue-rotate(210deg);
`;

const LogoWrapper = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

function SignInScreen({ children }) {
  const [login, setLogin] = useState('test@test.com');
  const [password, setPassword] = useState('password');
  const [user, initialising, error] = useAuthState(firebase.auth());
  const [db] = useState(firebase.firestore());
  const classes = useStyles();

  const loginAction = event => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(login, password);
  };

  const registerAction = event => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(login, password);
    db.collection('users').add({
      username: login,
      photos: []
    });
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  if (initialising) {
    return (
      <FullScreenWrapper>
        <CircularProgress />
      </FullScreenWrapper>
    );
  }
  if (error) {
    return (
      <FullScreenWrapper>
        <Typography variant="h1" color="error">
          Error: {error}
        </Typography>
      </FullScreenWrapper>
    );
  }
  if (user) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar color="default" position="sticky">
          <Toolbar>
            <LogoWrapper href="/">
              <Logo small src="/static/cat-logo.png" />
            </LogoWrapper>
            <Typography color="primary" variant="h6" className={classes.title}>
              Catsagram
            </Typography>
            <Grid container justify="flex-end" alignItems="center">
              <a href="/upload">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="secondary"
                  aria-label="upload"
                >
                  <CloudUploadIcon />
                </IconButton>
              </a>
              <Typography variant="subtitle1" color="secondary">
                {user.email}
              </Typography>
              <Button onClick={logout} color="secondary">
                <ExitToAppIcon />
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        {children}
      </div>
    );
  }
  return (
    <FullScreenWrapper>
      <Logo small={false} src="/static/cat-logo.png" />
      <StyledPaper>
        <div>
          <Typography color="primary" variant="h2">
            Login
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Into the Catsagram
          </Typography>
        </div>
        <form onSubmit={loginAction}>
          <FormWrapper>
            <InputLabel htmlFor="login-input">
              <Typography color="primary">Login:</Typography>
            </InputLabel>
            <Input
              id="login-input"
              value={login}
              onChange={({ target }) => setLogin(target.value)}
            />
            <InputLabel htmlFor="password-input">
              <Typography color="primary">Password:</Typography>
            </InputLabel>
            <Input
              id="password-input"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={loginAction}
              type="submit"
            >
              Log in
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={registerAction}
              type="submit"
            >
              Register
            </Button>
          </FormWrapper>
        </form>
      </StyledPaper>
    </FullScreenWrapper>
  );
}

export default SignInScreen;
