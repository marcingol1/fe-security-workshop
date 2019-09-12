import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import firebase from 'firebase';
import { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline
} from '@material-ui/core';
import SignInScreen from '../components/sign-in';
import config from '../config';

let db;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#673ab7'
    }
  }
});

export default class MyApp extends App {
  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {this.renderHead()}
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <>
            <SignInScreen>
              <Component {...pageProps} />
            </SignInScreen>
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
