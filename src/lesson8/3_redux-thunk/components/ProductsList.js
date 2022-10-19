/**
 * @description The Categories component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useProducts } from "../redux/ducks/products";

export function ProductsList(props) {
  const { products, error, isError, isLoading, isSuccess } = useProducts()

  return (
    <div className="">
      {isLoading && (
        <h3>Loading...</h3>
      )}

      {isError && (
        <div>{error}</div>
      )}

      {isSuccess && (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h5>{product.title}</h5>
              <p>Price: <b>${product.price}</b></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ProductsList.propTypes = {};

ProductsList.defaultProps = {};
