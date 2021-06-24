import React, { memo } from 'react';
import CenteredContent from 'components/CenteredContent';
import Button from './Button';

const Home = () => {
  return (
    <CenteredContent>
      <Button to='/anilist'>List of Anime</Button>
      <Button to='/qwerty'>This button will 404</Button>
      <Button to='/azerty' color='secondary'>This button will also 404</Button>
      <Button onClick={() => window.alert('!')} variant='outlined'>This button will alert</Button>
      <Button disabled={true}>Disabled button</Button>
    </CenteredContent>
  )
}

export default memo(Home);
