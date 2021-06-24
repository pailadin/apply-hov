import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Box as BoxBase } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { clamp, isEmpty, noop, omitBy } from 'lodash';

import { DEFAULT_INITIAL_FORM_VALUES } from '../constants';
import Container from './Container';
import BackButton from './BackButton';
import SearchButton from './SearchButton';
import Pagination from './Pagination';

const Box = props => <BoxBase component='span' {...props} />

const Header = ({
  refetch,
  lastPage,
  initialValues,
  setInitialValues,
  hidePagination,
  setHidePagination,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (variables) => {
    setHidePagination(true);

    try {
      await refetch({
        ...omitBy(variables, isEmpty),
        page: 1,
      });

      setInitialValues(variables);

    } catch (e) {
      console.error(e);
      // TODO A nicer looking error with a better message
      window.alert('Error fetching data!');
    }
  }

  const changePageBase = ({ resetForm }) => async newPage => {
    resetForm();
    const oldPage = currentPage;

    try {
      setCurrentPage(newPage);
      await refetch({ page: clamp(newPage, 1, lastPage) });

    } catch (e) {
      setCurrentPage(oldPage);

      console.error(e);
      window.alert('Error fetching more data!');
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSearch}
    >
      {({ submitForm, resetForm }) => {
        const changePage = changePageBase({ resetForm });

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

            <SearchButton onClick={submitForm} disabled={loading} />

            {
              !hidePagination && (
                <Pagination
                  currentPage={currentPage}
                  lastPage={lastPage}
                  changePage={changePage}
                  disabled={loading}
                />
              )
            }
          </Container>
        )
      }}
    </Formik>
  )
}

Header.propTypes = {
  refetch: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
  initialValues: PropTypes.object,
  setInitialValues: PropTypes.func.isRequired,
  hidePagination: PropTypes.bool,
  setHidePagination: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

Header.defaultProps = {
  refetch: noop,
  lastPage: 1,
  initialValues: DEFAULT_INITIAL_FORM_VALUES,
  setInitialValues: noop,
  hidePagination: true,
  setHidePagination: noop,
  loading: false,
}

export default memo(Header);
