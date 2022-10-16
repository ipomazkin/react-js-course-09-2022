/**
 * @description The HomePage component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PageLayout } from "../components/PageLayout";
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import newsData from '../news-data.json'

export function HomePage(props) {
  return (
    <PageLayout>
      <Typography variant="h2">Welcome to the Website.com!</Typography>
      <Typography sx={{ mt: 1 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto blanditiis cumque doloremque eos et excepturi facere facilis fuga fugit harum in minima, officia omnis quam quasi qui reiciendis, reprehenderit repudiandae saepe sapiente vitae? Ab aperiam, beatae culpa dolorem dolorum eligendi exercitationem facere inventore laboriosam libero nemo nisi quam qui quidem ratione, voluptas voluptatem. Aperiam earum eum fugit ullam!</Typography>
      <Typography sx={{ mt: 1 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aut doloribus error facilis iste nam necessitatibus nemo nostrum pariatur porro quod quos sit soluta, ut! Ab accusamus adipisci assumenda, culpa delectus ea est ipsam iste, itaque nobis, officia perferendis sapiente sint. Asperiores fugiat maiores quas quod suscipit! Consectetur eos eveniet exercitationem magni modi nisi pariatur perferendis reiciendis sint veniam!</Typography>
      <Typography variant="h4" sx={{ mt: 1 }}>Recent news:</Typography>
      <Typography>
        <ul>
          <li><Link to={`/news/${newsData[0].id}`}>{newsData[0].title}</Link></li>
          <li><Link to={`/news/${newsData[1].id}`}>{newsData[1].title}</Link></li>
          <li><Link to={`/news/${newsData[2].id}`}>{newsData[2].title}</Link></li>
        </ul>

        <p>
          <Link to={`/news/`}>All news</Link>
        </p>
      </Typography>
    </PageLayout>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};
