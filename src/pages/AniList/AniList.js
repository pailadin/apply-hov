import React, { useState, memo } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get, isEmpty, omitBy } from 'lodash';

import { useQuery } from 'utils';
import { ANIME_LIST as QUERY } from 'queries';
import { DEFAULT_INITIAL_FORM_VALUES } from './constants';
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

  const [prevSubmitVars, setPrevSubmitVars] = useState(DEFAULT_INITIAL_FORM_VALUES);
  const [hidePagination, setHidePagination] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const result = useQuery(QUERY, {
    variables: omitBy(DEFAULT_INITIAL_FORM_VALUES, isEmpty),
    onCompleted: () => {
      setHidePagination(false);

      setCurrentPage(get(result, 'data.Page.pageInfo.currentPage', 1));
      setLastPage(get(result, 'data.Page.pageInfo.lastPage', 1));
    },
  });

  const data = get(result, 'data.Page.media', []);

  return (
    <>
      <Header
        refetch={result?.refetch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        initialValues={prevSubmitVars}
        setInitialValues={setPrevSubmitVars}
        hidePagination={hidePagination}
        loading={result?.loading && !result?.inCache}
      />

      <Container className={classes.content} maxWidth='xl'>
        <Animes
          data={data}
          loading={result?.loading}
          inCache={result?.inCache}
          error={result?.error}
        />
      </Container>
    </>
  )
}

export default memo(Anilist);
