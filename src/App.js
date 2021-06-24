import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AniListPage from 'pages/AniList';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '100vh',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      
      <Container maxWidth={false} disableGutters={true} className={classes.container} id='app-container'>
        <Switch>
          <Route path='/anilist' component={AniListPage} />
          <Route exact path='/' component={HomePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
}
