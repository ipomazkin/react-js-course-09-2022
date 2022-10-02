/**
 * @description The NewsListItem component.
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const NewsListItem = memo((props) => {
  const { newsItem, onClick } = props

  console.log('NewsListItem is rendering now')

  return (
    <div className="">
      <h1 onClick={onClick}>{newsItem.title}</h1>
    </div>
  );
})

NewsListItem.propTypes = {
  onClick: PropTypes.func,
  newsItem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })
};

NewsListItem.defaultProps = {};
