/**
 * @description The Heading component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withDivWrapper } from "./withDivWrapper";

export function Heading(props) {
  return (
    <h1>{props.title}</h1>
  );
}

Heading.propTypes = {
  title: PropTypes.string
};

Heading.defaultProps = {};

export const WrappedHeading = withDivWrapper(Heading);
