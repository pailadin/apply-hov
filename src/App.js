import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline , Container } from '@material-ui/core';

import AnilistPage from 'pages/Anilist';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';

export default function App() {
  return (
    <>
      <CssBaseline />
      
      <Container>
        <Switch>
          <Route path='/anilist' component={AnilistPage} />
          <Route path='/' component={HomePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
}
