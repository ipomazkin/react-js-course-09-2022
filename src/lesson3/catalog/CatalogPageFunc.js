/**
 * @description The CatalogPageFunc component.
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { queryState } from "./query-state";
import { getProductsList } from "./api";

export function CatalogPageFunc(props) {
  const [products, setProducts] = useState([])
  const [productsQueryStatus, setProductsQueryStatus] = useState(queryState.initial)
  const [productsQueryError, setProductsQueryError] = useState(null)

  useEffect(() => {
    setProductsQueryStatus(queryState.loading)

    getProductsList().then((productsList) => {
      setProducts(productsList)
      setProductsQueryError(null)
      setProductsQueryStatus(queryState.success)
    }).catch((error) => {
      setProductsQueryError(error)
      setProductsQueryStatus(queryState.error)
    })
  }, [])

  return (
    <div className="">CatalogPageFunc</div>
  );
}

CatalogPageFunc.propTypes = {};

CatalogPageFunc.defaultProps = {};
