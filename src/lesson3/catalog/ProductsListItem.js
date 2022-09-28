/**
 * @description The ProductsListItem component.
 */
import React from 'react';
import PropTypes from 'prop-types';

export function ProductsListItem(props) {
  const {
    id,
    createdAt,
    title,
    description,
    price,
    photo,
    isNew,
    isSale,
    isInStock,
    categories,
  } = props.product

  return (
    <div className="" style={{
      padding: '10px',
      margin: '10px 0',
      border: '1px solid red',
      width: '33.33%'
    }}>
      <div>
        <img style={{
          width: '100%',
          dispaly: 'block'
        }} src={`${photo}?v=${id}`} alt={title}/>
        <h2>{title}</h2>
        <p>Price: <b>${price}</b></p>
        {isNew && (
          <h3 style={{ color: 'purple', textShadow: '2px 1px 0 green' }}>New Product!!!</h3>
        )}
      </div>
    </div>
  );
}

ProductsListItem.propTypes = {
  product: PropTypes.object,
};

ProductsListItem.defaultProps = {
  product: {},
};
