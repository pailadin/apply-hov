import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
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

const Image = memo(({ imageUrl, isAdult, title }) => {
  const classes = useStyles();

  return (
    <CardMedia
      className={clsx({
        [classes.media]: true,
        [classes.mediaAdult]: isAdult,
      })}
      image={imageUrl}
      title={title}
    />
  )
});

const ImageWithLink = ({ url, ...rest }) => {  
  if (url) {
    return (
      <a href={url} target='_blank' rel='noreferrer'>
        <Image {...rest} />
      </a>
    )
  }
  
  return <Image {...rest} />
}

ImageWithLink.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string,
  isAdult: PropTypes.bool,
  title: PropTypes.string,
}

ImageWithLink.defaultProps = {
  isAdult: false,
}

export default memo(ImageWithLink);
