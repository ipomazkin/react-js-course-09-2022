/**
 * @description The Header component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/material'
import { NavLink, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  '&.active': {
    color: theme.palette.secondary.main
  }
}))

export function Header(props) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <StyledButton LinkComponent={NavLink} to="/" end={true}>Home</StyledButton>
            <StyledButton LinkComponent={NavLink} to="/news">News</StyledButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
