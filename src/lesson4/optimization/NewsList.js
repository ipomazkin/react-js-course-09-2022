/**
 * @description The NewsList component.
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NewsListItem } from "./NewsListItem";

export const NewsList = memo((props) => {
  const { news, onNewsItemClick } = props

  console.log('NewsList is rendering now')

  return (
    <div className="">
      {news.map((newsItem) => (
        <NewsListItem onClick={onNewsItemClick} newsItem={newsItem} key={newsItem.id} />
      ))}
    </div>
  );
})

NewsList.propTypes = {
  onNewsItemClick: PropTypes.func,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  )
};

NewsList.defaultProps = {};
