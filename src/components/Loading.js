import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { isEmpty } from 'lodash';
import CenteredContent from './CenteredContent';

const Loading = ({
  data,
  loading,
  inCache,
  error,
  children
}) => {
  if (!inCache && loading) {
    return (
      <CenteredContent>
        <CircularProgress />
      </CenteredContent>
    )
  }

  // TODO a better error message
  if (error) {
    return (
      <CenteredContent>
        Error loading data
      </CenteredContent>
    )
  }

  if (isEmpty(data)) {
    return (
      <CenteredContent>
        No data found
      </CenteredContent>
    )
  }

  return children;
}

Loading.propTypes = {
  loading: PropTypes.bool,
  inCache: PropTypes.bool,
  error: PropTypes.object,
}

Loading.defaultProps = {
  loading: true,
  inCache: false,
  children: null,
}

export default memo(Loading);
