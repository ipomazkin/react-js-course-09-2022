/**
 * @description The NewsPage component.
 */
import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NewsList } from "./NewsList";

export function NewsPage(props) {
  const [isShowList, setIsShowList] = useState(false)
  const [isShowHotNews, setIsShowHotNews] = useState(false)

  console.log('NewsPage is rendering now')

  const news = useMemo(() => {
    const data = [
      {
        id: '1',
        title: 'News 1',
        hot: false
      },
      {
        id: '2',
        title: 'News 2',
        hot: true
      },
      {
        id: '3',
        title: 'News 3',
        hot: false
      },
      {
        id: '4',
        title: 'News 4',
        hot: true
      },
    ]

    return data
  }, [])

  const hotNews = useMemo(() => {
    return news.filter((newsItem) => newsItem.hot)
  }, [news])

  // const handleNewsItemClick = useMemo(() => {
  //   return (newsId) => {
  //     console.log(newsId)
  //   }
  // }, [])

  const handleNewsItemClick = useCallback((newsId) => {
    console.log(newsId)
  }, [])

  return (
    <div className="">
      <button onClick={() => setIsShowList(!isShowList)}>{isShowList ? 'Hide' : 'Show'} news</button>
      <button onClick={() => setIsShowHotNews(!isShowHotNews)}>{isShowHotNews ? 'Usual news' : 'Hot news'}</button>
      <div>
        {isShowList && (
          <NewsList news={news} hotNews={hotNews} onNewsItemClick={handleNewsItemClick}/>
        )}
      </div>
    </div>
  );
}

NewsPage.propTypes = {};

NewsPage.defaultProps = {};
