import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import AniListPage from 'pages/AniList';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';

export default function App() {
  return (
    <>
      <CssBaseline />
      
      <Switch>
        <Route path='/anilist' component={AniListPage} />
        <Route exact path='/' component={HomePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
