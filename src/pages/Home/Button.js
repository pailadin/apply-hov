import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { merge } from 'lodash';

const useStyles = makeStyles(theme => ({
  buttonRoot: {
    padding: '1rem',
    margin: '1rem',
  },
}));

const Button = ({
  to,
  disabled,
  onClick: onClickFromProps,
  classes: classesFromProps,
  children,
  ...rest
}) => {
  const classes = useStyles();
  const history = useHistory();

  const onClick = onClickFromProps
    ? onClickFromProps
    : (to ? () => history.push(to) : undefined)

  return (
    <MuiButton
      orientation='vertical'
      variant='contained'
      size='large'
      color='primary'
      fullWidth
      disabled={disabled}
      onClick={onClick}
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
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classes: PropTypes.object,
}

Button.defaultProps = {
  disabled: false,
}

export default memo(Button);
