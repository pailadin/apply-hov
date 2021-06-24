import React, { memo } from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <IconButton onClick={() => history.push(`/`)}>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default memo(BackButton);
