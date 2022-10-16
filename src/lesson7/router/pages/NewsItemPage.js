/**
 * @description The NewsItemPage component.
 */
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Button } from "@mui/material";
import { PageLayout } from "../components/PageLayout";
import { useParams, useNavigate } from "react-router";
import newsData from '../news-data.json'

export function NewsItemPage(props) {
  const { id } = useParams()
  const navigate = useNavigate()

  const news = useMemo(() => newsData.find((item) => item.id === id), [id])

  const goBack = useCallback(() => {
    navigate('/news');
  }, [navigate])

  return (
    <PageLayout>
      {!news && (
        <Box>
          <Typography variant="h4" sx={{ mt: 2 }}>Article not found</Typography>
        </Box>
      )}

      {news && (
        <Box>
          <Typography variant="h4" sx={{ mt: 2 }}>{news.title}</Typography>
          <Typography sx={{ mt: 2 }}>{news.content}</Typography>
        </Box>
      )}

      <Button sx={{ mt: 2 }} onClick={goBack}>{'<'} Back to news</Button>
    </PageLayout>
  );
}

NewsItemPage.propTypes = {};

NewsItemPage.defaultProps = {};
