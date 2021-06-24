import React, { useState, memo } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

import { useLazyQuery } from 'utils';
import { ANIME_LIST as QUERY } from 'queries';
import Header from './Header';
import Animes from './Animes';

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

  const [prevSubmitVars, setPrevSubmitVars] = useState(undefined);
  const [fetchData, result] = useLazyQuery(QUERY);

  const hasDoneASearch = prevSubmitVars !== undefined;
  const currentPage = get(result, 'data.Page.pageInfo.currentPage', 1);
  const lastPage = get(result, 'data.Page.pageInfo.lastPage', 1);

  return (
    <Box className={classes.container}>
      <Header
        fetchData={fetchData}
        fetchMoreData={result?.fetchMore}
        currentPage={currentPage}
        lastPage={lastPage}
        initialValues={prevSubmitVars}
        setInitialValues={setPrevSubmitVars}
      />

      <Container className={classes.content} maxWidth='xl'>
        { hasDoneASearch && <Animes {...result} /> }
      </Container>
    </Box>
  )
}

export default memo(Anilist);
