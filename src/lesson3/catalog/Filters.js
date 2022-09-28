/**
 * @description The Filters component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


export function Filters(props) {
  const {
    titleFilterValue,
    priceFilterMin,
    priceFilterMax,
    isNewFilter,
    handleChangeTitleFilter,
    handleChangePriceFilter,
    handleChangeIsNewFilter,
  } = props

  const onChangeTitle = ({ target }) => {
    handleChangeTitleFilter(target.value)
  }

  const onChangeIsNew = () => {
    handleChangeIsNewFilter(!isNewFilter)
  }

  const onChangeMin = ({ target }) => {
    let value = parseInt(target.value)
    value = Number.isNaN(value) ? 0 : value

    handleChangePriceFilter(value, priceFilterMax)
  }

  const onChangeMax = ({ target }) => {
    let value = parseInt(target.value)
    value = Number.isNaN(value) ? 0 : value

    handleChangePriceFilter(priceFilterMin, value)
  }

  return (
    <div className="">
      <div>
        <TextField value={titleFilterValue} onChange={onChangeTitle} />
      </div>
      <div>
        <label htmlFor="isNew">
          <Checkbox  checked={isNewFilter} onChange={onChangeIsNew} />
          <span>Show new only</span>
        </label>
      </div>
      <div>
        <div>
          Filter by price:
        </div>
        <div>
          <span>From: <input onChange={onChangeMin} placeholder="Price from" type="number" value={priceFilterMin} min={0} max={priceFilterMax - 1} /></span>
          <span>To: <input onChange={onChangeMax} placeholder="Price to" type="number" value={priceFilterMax} min={priceFilterMin + 1} /></span>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  titleFilterValue: PropTypes.string,
  priceFilterMin: PropTypes.number,
  priceFilterMax: PropTypes.number,
  isNewFilter: PropTypes.bool,
  handleChangeTitleFilter: PropTypes.func,
  handleChangePriceFilter: PropTypes.func,
  handleChangeIsNewFilter: PropTypes.func,
};

Filters.defaultProps = {};
