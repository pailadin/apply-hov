import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline , Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AnilistPage from 'pages/Anilist';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';

const useStyles = makeStyles((theme) => ({
  // TODO Maybe a way to do this without custom styles
  containerRoot: {
    minHeight: '100vh',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      
      <Container classes={{ root: classes.containerRoot }}>
        <Switch>
          <Route path='/anilist' component={AnilistPage} />
          <Route path='/' component={HomePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
}
