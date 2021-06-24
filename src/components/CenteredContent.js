import React, { memo } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    height: '100%',
  },
}));

const CenteredContent = ({ children }) => {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.container }}>
      <Grid
        container
        classes={{ root: classes.container }}
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
