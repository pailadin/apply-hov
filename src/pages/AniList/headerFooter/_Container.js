import React, { memo } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    minHeight: '3rem',
  },
}));

const Container = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} classes={{ root: classes.root }}>
      {children}
    </Paper>
  )
}

export default memo(Container);
