import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { merge } from 'lodash';

const useStyles = makeStyles(theme => ({
  buttonRoot: {
    padding: '1rem',
    margin: '1rem',
  },
}));


const Button = ({
  disabled,
  classes: classesFromProps,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      orientation='vertical'
      variant='contained'
      size='large'
      color='primary'
      fullWidth
      disabled={disabled}
      classes={merge({
        root: classes.buttonRoot,
      }, classesFromProps)}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  classes: PropTypes.object,
}

Button.defaultProps = {
  disabled: false,
}

export default memo(Button);
