/**
 * @description The Lesson8 component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { App as AppExampleRedux } from './1_redux/App'
import { App as AppExampleThunk } from './3_redux-thunk/App'
import { App as AppExampleReduxToolkit } from './4_redux-toolkit/App'
// import "./2_immer/examples"

export function Lesson8(props) {
  return (
    // <AppExampleRedux />
    // <AppExampleThunk />
    <AppExampleReduxToolkit />
  );
}

Lesson8.propTypes = {};

Lesson8.defaultProps = {};
