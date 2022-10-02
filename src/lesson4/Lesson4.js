/**
 * @description The Lesson4 component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NewsPage } from "./optimization/NewsPage";
import { useBooleanFlipFlop } from './custom-hooks'
import RefsExample from "./refs/RefsExample";
import { Button } from "./prop-types/Button";

export function Lesson4(props) {
  // const isOpen = useBooleanFlipFlop()

  return (
    <>
      {/*<NewsPage />*/}
      <RefsExample />
      <Button variant="contained" />
    </>
  );
}

Lesson4.propTypes = {};

Lesson4.defaultProps = {};
