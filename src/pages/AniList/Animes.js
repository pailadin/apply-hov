// Yes the grammar on the filename is wrong, but it's useful
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Animes = ({ data, loading, inCache }) => {
  console.log({ data, loading, inCache }); // TODO REMOVE

  return <div>TODO</div>
}

Animes.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  inCache: PropTypes.bool,
}

Animes.defaultProps = {
  data: {},
  loading: false,
  inCache: false,
}


export default memo(Animes);
