// Yes the grammar on the filename is wrong, but it's useful
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Loading from 'components/Loading';
import Anime from './Anime';

const Animes = ({ data, ...LoadingProps }) => {
  return (
    <Loading data={data} {...LoadingProps}>
      <Grid container justify='center' spacing={4}>
        {data.map(row => (
          <Grid key={row.id} item>
            <Anime
              titleEnglish={row?.title?.english}
              titleRomaji={row?.title?.romaji}
              titleJapanese={row?.title?.native}
              imageUrl={row?.coverImage?.large}
              url={row?.siteUrl}
              description={row?.description}
              isAdult={row?.isAdult}
              score={row?.meanScore}
              popularity={row?.popularity}
              startDate={row?.startDate}
            />
          </Grid>
        ))}
      </Grid>
    </Loading>
  )
}

Animes.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  inCache: PropTypes.bool,
}

Animes.defaultProps = {
  data: [],
  loading: false,
  inCache: false,
}

export default memo(Animes);
