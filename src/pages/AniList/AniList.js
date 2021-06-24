import React, { useState, memo } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

import { useQuery } from 'utils';
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
    paddingLeft: '4rem',
    paddingRight: '4rem',
    overflow: 'auto',
  },
}));

const Anilist = () => {
  const classes = useStyles();

  const [prevSubmitVars, setPrevSubmitVars] = useState(undefined);
  const result = useQuery(QUERY, { variables: { search: '' }});

  const currentPage = get(result, 'data.Page.pageInfo.currentPage', 1);
  const lastPage = get(result, 'data.Page.pageInfo.lastPage', 1);
  const data = get(result, 'data.Page.media', [])
  const hasData = data.length > 0;

  return (
    <>
      <Header
        hasData={hasData}
        refetch={result?.refetch}
        currentPage={currentPage}
        lastPage={lastPage}
        initialValues={prevSubmitVars}
        setInitialValues={setPrevSubmitVars}
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
