import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchButton = props => {
  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      endIcon={<SearchIcon />}
      {...props}
    >
      Search
    </Button>
  )
}

export default memo(SearchButton);
