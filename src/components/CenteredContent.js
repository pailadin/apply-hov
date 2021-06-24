import React, { memo } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // TODO Maybe a way to do this without custom styles
  containerRoot: {
    minHeight: '100vh',
  },
}));

const CenteredContent = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        classes={{ root: classes.containerRoot }}
        spacing={0}
        align='center'
        justify='center'
        direction='column'
      >
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default memo(CenteredContent);
