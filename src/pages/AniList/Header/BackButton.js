import React, { memo } from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const BackButton = props => {
  const history = useHistory();

  return (
    <IconButton onClick={() => history.push(`/`)} {...props}>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default memo(BackButton);
