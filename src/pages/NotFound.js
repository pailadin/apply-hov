import React, { useEffect, useState, memo } from 'react';
import { Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CenteredContent from 'components/CenteredContent';
import { REDIRECT_TIME_SECONDS } from 'consts';

const NotFound = () => {
  const history = useHistory();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_TIME_SECONDS);

  useEffect(() => {
    let timer = setInterval(() => {
      const newSecondsLeft = secondsLeft - 1
      setSecondsLeft(newSecondsLeft);

      if (newSecondsLeft <= 0) {
        history.push(`/`);
        clearInterval(timer);
      }

    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <CenteredContent>
      <Box mb={4}>
        Page not found! Redirecting back to the home page in {secondsLeft} second{secondsLeft > 1 ? 's' : ''}.
      </Box>

      <Box>Or click <Link to='/'>here</Link>.</Box>
    </CenteredContent>
  )
}

export default memo(NotFound);
