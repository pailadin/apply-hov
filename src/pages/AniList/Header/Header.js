import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box as BoxBase } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { clamp, noop } from 'lodash';

import Container from './Container';
import BackButton from './BackButton';
import SearchButton from './SearchButton';

const DEFAULT_INITIAL_FORM_VALUES = { search: '' };

const Box = props => <BoxBase component='span' {...props} />

const Header = ({
  fetchData,
  fetchMoreData,
  currentPage,
  lastPage,
  initialValues,
  setInitialValues,
}) => {
  const handleSearch = async (variables, { setSubmitting }) => {  
    try {
      setSubmitting(true);
      await fetchData({ variables, page: 1 });
      setInitialValues(variables);

    } catch (e) {
      console.error(e);
      // TODO A nicer looking error with a better message
      window.alert('Error fetching data!');

    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSearch}
    >
      {({ submitForm, resetForm, isSubmitting }) => {
        const changePage = page => {
          resetForm();
          fetchMoreData({ variables: { page: clamp(page, 1, lastPage) }});
        };

        return (
          <Container>
            <Box mr={4}>
              <BackButton />
            </Box>

            <Box mr={2}>
              <Field
                component={TextField}
                name='search'
                placeholder='All shows'
                variant='outlined'
                onKeyDown={({ key }) => {
                  if (key === "Enter") submitForm();
                }}
              />
            </Box>

            <SearchButton onClick={submitForm} disabled={isSubmitting} />

            <div onClick={() => changePage(currentPage - 1)}>PREV PAGE</div>
            <div onClick={() => changePage(currentPage + 1)}>NEXT PAGE</div>
          </Container>
        )
      }}
    </Formik>
  )
}

Header.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchMoreData: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  initialValues: PropTypes.object.isRequired,
  setInitialValues: PropTypes.func.isRequired,
}

Header.defaultProps = {
  fetchData: noop,
  fetchMoreData: noop,
  currentPage: 1,
  lastPage: 1,
  initialValues: DEFAULT_INITIAL_FORM_VALUES,
  setInitialValues: noop,
}

export default memo(Header);
