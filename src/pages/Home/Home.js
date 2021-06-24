import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
  // TODO Also maybe a way to do this without custom styles
  containerRoot: {
    minHeight: '100vh',
  },
}));


const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ root: classes.containerRoot }}
      spacing={0}
      align='center'
      justify='center'
      direction='column'
    >
      <Grid item>
        <Button>List of Anime</Button>
        <Button>This button will 404</Button>
        <Button color='secondary'>This button will also 404</Button>
        <Button disabled={true}>Disabled button</Button>
      </Grid>
    </Grid>
  )
}

export default memo(Home);
