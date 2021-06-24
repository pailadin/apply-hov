import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Pagination as PaginationBase } from '@material-ui/lab';
import { noop } from 'lodash';

const Pagination = ({
  currentPage,
  lastPage,
  changePage,
  disabled,
  ...rest
}) => {
  const handleChange = (_, value) => {
    if (!disabled) {
      changePage(value);
    }
  };

  return (
    <PaginationBase
      page={currentPage}
      count={lastPage}
      color='primary'
      onChange={handleChange}
      disabled={disabled}
      {...rest}
    />
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Pagination.defaultProps = {
  currentPage: 1,
  lastPage: 1,
  changePage: noop,
  disabled: false,
}

export default memo(Pagination);
