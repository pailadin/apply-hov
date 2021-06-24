import React, { memo } from 'react';
import CenteredContent from 'components/CenteredContent';
import Button from './Button';

const Home = () => {
  return (
    <CenteredContent>
      <Button>List of Anime</Button>
      <Button>This button will 404</Button>
      <Button color='secondary'>This button will also 404</Button>
      <Button disabled={true}>Disabled button</Button>
    </CenteredContent>
  )
}

export default memo(Home);
