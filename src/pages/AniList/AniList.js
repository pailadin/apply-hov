import React, { memo } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'utils';
import { ANIME_LIST as QUERY } from 'queries';
import Header from './Header';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '100vh',
  },
  content: {
    flex: 1,
    paddingTop: '2rem',
    paddingBottom: '2rem',
    overflow: 'auto',
  },
}));

const Anilist = () => {
  const classes = useStyles();

  // const x = useQuery(QUERY, {
  //   onCompleted: (...z) => console.log(z),
  // });

  return (
    <Box className={classes.container}>
      <Header />

      <Container className={classes.content} maxWidth='xl'>
        TODO
      </Container>
    </Box>
  )
}

export default memo(Anilist);
