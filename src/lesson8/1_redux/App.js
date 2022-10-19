/**
 * @description The App component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Page } from "./components/Page";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export function App(props) {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

App.propTypes = {};

App.defaultProps = {};
