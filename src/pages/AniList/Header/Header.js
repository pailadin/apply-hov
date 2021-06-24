import React, { memo } from 'react';
import { Box as BoxBase, TextField } from '@material-ui/core';
import Container from './Container';
import BackButton from './BackButton';
import SearchButton from './SearchButton';

const Box = props => <BoxBase component='span' {...props} />

const Header = () => {
  return (
    <Container>
      <Box mr={4}>
        <BackButton />
      </Box>

      <Box mr={2}>
        <TextField placeholder='All shows' variant='outlined' />
      </Box>

      <SearchButton />
    </Container>
  )
}

export default memo(Header);
