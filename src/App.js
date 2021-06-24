import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AnilistPage from 'pages/Anilist';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';

export default function App() {
  return (
    <Switch>
      <Route path='/anilist' component={AnilistPage} />
      <Route path='/' component={HomePage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
