/**
 * @description The Page component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ProductsList } from "./ProductsList";

export function Page(props) {
  return (
    <ProductsList />
  );
}

Page.propTypes = {};

Page.defaultProps = {};
