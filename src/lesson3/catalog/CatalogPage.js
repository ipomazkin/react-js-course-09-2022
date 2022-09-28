/**
 * @description The CatalogPage component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Filters } from "./Filters";
import { ProductsList } from "./ProductsList";
import { queryState } from "./query-state";
import { getProductsList } from "./api";

export class CatalogPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productsQueryStatus: queryState.initial,
      productsQueryError: null,

      titleFilterValue: 'Awesome',
      priceFilterMin: 300,
      priceFilterMax: 700,
      isNewFilter: true,
    }
  }

  handleChangeTitleFilter = (titleFilterValue) => {
    this.setState({
      titleFilterValue
    })
  };

  handleChangeIsNewFilter = (isNewFilter) => {
    this.setState({
      isNewFilter
    })
  };

  handleChangePriceFilter = (priceFilterMin, priceFilterMax) => {
    this.setState({
      priceFilterMin,
      priceFilterMax
    })
  };

  componentDidMount() {
    this.loadProductsList()
  }

  loadProductsList() {
    this.setState({
      productsQueryStatus: queryState.loading,
    })

    getProductsList().then((productsList) => {
      this.setState({
        products: productsList,
        productsQueryStatus: queryState.success,
        productsQueryError: null,
      })
    }).catch((error) => {
      this.setState({
        productsQueryStatus: queryState.error,
        productsQueryError: error,
      })
    })
  }

  getFilteredProducts() {
    const {
      products,

      titleFilterValue,
      priceFilterMin,
      priceFilterMax,
      isNewFilter,
    } = this.state

    return products.filter((product) => {
      let isPass = true

      if (titleFilterValue.trim() !== '') {
        let isMatch = product.title.toLocaleLowerCase().includes(titleFilterValue.toLocaleLowerCase())
        isPass = isPass && isMatch
      }

      const price = parseFloat(product.price)
      isPass = isPass && (
        price >= priceFilterMin && price <= priceFilterMax
      )

      if (isNewFilter) {
        isPass = isPass && product.isNew
      }

      return isPass
    })
  }

  render() {
    const {
      products,
      productsQueryStatus,
      productsQueryError,

      titleFilterValue,
      priceFilterMin,
      priceFilterMax,
      isNewFilter,
    } = this.state
    const isLoading = productsQueryStatus === queryState.loading || productsQueryStatus === queryState.initial
    const isSuccess = productsQueryStatus === queryState.success
    const isError = productsQueryStatus === queryState.error

    const filteredProducts = this.getFilteredProducts()

    return (
      <div className="">
        <div>
          <Filters
            titleFilterValue={titleFilterValue}
            priceFilterMin={priceFilterMin}
            priceFilterMax={priceFilterMax}
            isNewFilter={isNewFilter}
            handleChangeTitleFilter={this.handleChangeTitleFilter}
            handleChangePriceFilter={this.handleChangePriceFilter}
            handleChangeIsNewFilter={this.handleChangeIsNewFilter}
          />
        </div>
        <div>
          {isLoading && (
            <div>Loading....</div>
          )}

          {!isLoading && isSuccess && (
            <ProductsList products={filteredProducts} allProductsAmount={products.length} />
          )}

          {!isLoading && isError && (
            <div style={{ color: 'red' }}>
              {productsQueryError?.message || 'Something went wrong'}
            </div>
          )}
        </div>
      </div>
    );
  }
}

CatalogPage.propTypes = {};

CatalogPage.defaultProps = {};
