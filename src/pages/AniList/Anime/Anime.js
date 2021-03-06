import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  Grid as GridBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RatingIcon from '@material-ui/icons/StarHalf';
import PopularityIcon from '@material-ui/icons/People';
import TimeIcon from '@material-ui/icons/Schedule';
import { uniq, truncate } from 'lodash';
import { stripHtml } from 'string-strip-html';
import ImageWithLink from './ImageWithLink';

const MAX_DESCRIPTION_LENGTH = 160;

const Grid = ({ children, ...rest }) => (
  <GridBase
    container
    justify='center'
    alignItems='center'
    {...rest}
  >
    {children}
  </GridBase>
)

const useStyles = makeStyles({
  cardRoot: {
    minWidth: '15rem',
    maxWidth: '20rem',
  },
  gridContainerRoot: {
    marginTop: '1rem',
  },
});

const Anime = ({
  titleEnglish,
  titleRomaji,
  titleJapanese,
  imageUrl,
  url,
  isAdult,
  description,
  score,
  popularity,
  startDate,
}) => {
  const classes = useStyles();

  const titles = uniq([
    titleEnglish,
    titleRomaji,
    titleJapanese,
  ]).filter(x => x);

  const title = titles.length > 1
    ? `${titles[0]} (${titles[1]})`
    : `${titles[0]}`;

  let cleanDescription = '';
  try {
    cleanDescription = truncate(stripHtml(description).result, {
      length: MAX_DESCRIPTION_LENGTH,
      omission: '...',
    });
  } catch(e) {}

  const dateString = startDate.month && startDate.year
    ? `${startDate.month}/${startDate.year}`
    : '';

  return (
    <Card className={classes.cardRoot}>
      <ImageWithLink
        imageUrl={imageUrl}
        url={url}
        isAdult={isAdult}
        title={title}
      />

      <CardContent>
        <Typography gutterBottom variant='h6' component='h2'>
          {title}
        </Typography>

        {
          cleanDescription && (
            <Typography variant='body2' color='textSecondary' component='p'>
              {cleanDescription}
            </Typography>
          )
        }

        <Grid classes={{ root: classes.gridContainerRoot }}>
          <Grid item xs={4}>
            <PopularityIcon /> {popularity}
          </Grid>

          <Grid item xs={4}>
            <RatingIcon /> {score}
          </Grid>
          
          <Grid item xs={4}>
            {dateString && (<>
              <TimeIcon /> {dateString}
            </>)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

Anime.propTypes = {
  titleEnglish: PropTypes.string,
  titleRomaji: PropTypes.string,
  titleJapanese: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string,
  isAdult: PropTypes.bool,
  score: PropTypes.number,
  popularity: PropTypes.number,
  startDate: PropTypes.object,
}

Anime.defaultProps = {
  isAdult: false,
  score: 0,
  popularity: 0,
  startDate: {},
}

export default memo(Anime);
