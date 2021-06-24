// Yes the grammar on the filename is wrong, but it's useful
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid as GridBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RatingIcon from '@material-ui/icons/StarHalf';
import PopularityIcon from '@material-ui/icons/People';
import TimeIcon from '@material-ui/icons/Schedule';
import { uniq, truncate } from 'lodash';
import clsx from 'clsx';
import { stripHtml } from 'string-strip-html';

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
  root: {
    minWidth: '15rem',
    maxWidth: '20rem',
  },
  media: {
    height: '10rem',
  },
  mediaAdult: {
    filter: 'blur(1rem)',
    '&:hover': {
      filter: 'none',
    },
  }
});

const Anime = ({
  titleEnglish,
  titleRomaji,
  titleJapanese,
  image,
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={clsx({
            [classes.media]: true,
            [classes.mediaAdult]: isAdult,
          })}
          image={image}
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

          <Grid>
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
      </CardActionArea>
    </Card>
  );
}

Anime.propTypes = {
  titleEnglish: PropTypes.string,
  titleRomaji: PropTypes.string,
  titleJapanese: PropTypes.string,
  image: PropTypes.string.isRequired,
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
