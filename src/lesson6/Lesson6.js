/**
 * @description The Lesson6 component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollWatcherExample } from "./render-props/ScrollWatcherExample";
import { LayoutExample } from "./render-props/LayoutExample";
import { LocaleContextExample } from "./context/LocaleContextExample";
// import { AppRoutes } from "./react-router/AppRoutes";
import { Form } from "./mui/components/Form";

export function Lesson6(props) {
  return (
    <div className="">
      {/*<ScrollWatcherExample />*/}
      {/*<LayoutExample />*/}
      {/*<LocaleContextExample />*/}
      <Form />
    </div>
  );
}

Lesson6.propTypes = {};

Lesson6.defaultProps = {};
