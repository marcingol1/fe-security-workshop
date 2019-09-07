import App, { Container } from 'next/app';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import SignInScreen from '../components/sign-in';

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
          <Fragment>
            <SignInScreen>
              <Component {...pageProps} />
            </SignInScreen>
          </Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
