// Yes the grammar on the filename is wrong, but it's useful
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

const Animes = ({ data, ...LoadingProps }) => {
  // console.log({ data, loading, inCache }); // TODO REMOVE

  return (
    <Loading {...LoadingProps}>
      TODO
    </Loading>
  )
}

Animes.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  inCache: PropTypes.bool,
}

Animes.defaultProps = {
  data: [],
  loading: false,
  inCache: false,
}

export default memo(Animes);
