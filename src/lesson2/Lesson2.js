/**
 * @description The Lesson2 component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Parent } from "./state-render-flow/Parent";
import { Heading, WrappedHeading } from "./Heading";

export function Lesson2(props) {
  return (
    <div className="">
      <Parent />
      <Heading title="Heading 1" />
      <WrappedHeading title="Heading 2" />
    </div>
  );
}

Lesson2.propTypes = {};

Lesson2.defaultProps = {};
