/**
 * @description The RouterExample component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NewsItemPage } from "./pages/NewsItemPage";
import { NewsListPage } from "./pages/NewsListPage";
import { Header } from "./components/Header";
import { Box } from '@mui/material'
import { Page404 } from "./pages/Page404";

export function RouterExample(props) {
  return (
    <HashRouter>
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Box>
    </HashRouter>
  );
}

RouterExample.propTypes = {};

RouterExample.defaultProps = {};
