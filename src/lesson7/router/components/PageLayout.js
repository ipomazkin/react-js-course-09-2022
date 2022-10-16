/**
 * @description The PageLayout component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material'
import { Header } from "./Header";

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{
        marginTop: 1
      }}>{children}</Container>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node
};

PageLayout.defaultProps = {};
