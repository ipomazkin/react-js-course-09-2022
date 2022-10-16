/**
 * @description The Lesson7 component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { RouterExample } from "./router/RouterExample";
import { LocalState } from "./redux/LocalState";
import { GlobalState } from "./redux/GlobalState";

export function Lesson7(props) {
  return (
    <>
      {/*<RouterExample />*/}
      {/*<LocalState />*/}
      <GlobalState />
    </>
  );
}

Lesson7.propTypes = {};

Lesson7.defaultProps = {};
