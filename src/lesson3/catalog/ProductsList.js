/**
 * @description The ProductsList component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ProductsListItem } from "./ProductsListItem";

export function ProductsList(props) {
  const { products, allProductsAmount } = props

  return (
  <div>
    <h2>Found {products.length} of {allProductsAmount}</h2>
    <div className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  allProductsAmount: PropTypes.number,
};

ProductsList.defaultProps = {
  products: [],
  allProductsAmount: 0
};
