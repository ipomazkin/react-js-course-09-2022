/**
 * @description The NewsListPage component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PageLayout } from "../components/PageLayout";
import newsData from '../news-data.json'
import { Box, Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export function NewsListPage(props) {
  return (
    <PageLayout>
      <Box>
        <Typography sx={{
          mt: 2
        }} variant="h4">News</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {newsData.map((item) => (
            <Grid item key={item.id} xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1 }} variant="body2">
                    {item.content.slice(0, 30) + '...'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button to={`/news/${item.id}`} LinkComponent={Link} size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
}

NewsListPage.propTypes = {};

NewsListPage.defaultProps = {};
