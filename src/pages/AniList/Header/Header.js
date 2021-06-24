import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box as BoxBase } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { clamp, isNil, noop, omitBy } from 'lodash';

import Container from './Container';
import BackButton from './BackButton';
import SearchButton from './SearchButton';
import Pagination from './Pagination';

const DEFAULT_INITIAL_FORM_VALUES = { search: '' };

const Box = props => <BoxBase component='span' {...props} />

const Header = ({
  refetch,
  currentPage,
  lastPage,
  initialValues,
  setInitialValues,
  hasData,
}) => {
  const handleSearch = async (variables, { setSubmitting }) => {
    try {
      setSubmitting(true);

      await refetch({
        ...omitBy(variables, isNil),
        page: 1,
      });

      setInitialValues(variables);

    } catch (e) {
      console.error(e);
      // TODO A nicer looking error with a better message
      window.alert('Error fetching data!');

    } finally {
      setSubmitting(false);
    }
  }

  const changePageBase = ({ resetForm, setSubmitting }) => async page => {
    resetForm();

    try {
      setSubmitting(true);
      // fetchMore was not working here TODO look into it
      await refetch({ page: clamp(page, 1, lastPage) });

    } catch (e) {
      console.error(e);
      window.alert('Error fetching more data!');

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
      {({ submitForm, resetForm, setSubmitting, isSubmitting }) => {
        const changePage = changePageBase({ resetForm, setSubmitting });

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

            {
              hasData && (
                <Pagination
                  currentPage={currentPage}
                  lastPage={lastPage}
                  changePage={changePage}
                  disabled={isSubmitting}
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
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  initialValues: PropTypes.object.isRequired,
  setInitialValues: PropTypes.func.isRequired,
  hasData: PropTypes.bool,
}

Header.defaultProps = {
  refetch: noop,
  currentPage: 1,
  lastPage: 1,
  initialValues: DEFAULT_INITIAL_FORM_VALUES,
  setInitialValues: noop,
  hasData: false,
}

export default memo(Header);
