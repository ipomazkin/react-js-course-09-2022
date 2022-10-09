/**
 * @description The Form component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Button, styled, ThemeProvider } from '@mui/material'
import { theme } from '../theme'

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '20px',
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
}))

export function Form(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        margin: '10px'
      }} className="">
        <Box component="form">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <Box>
            <Button sx={{
              fontSize: '20px'
            }}>Submit</Button>
            <StyledButton>Submit 2</StyledButton>
            <StyledButton>Submit 3</StyledButton>
            <StyledButton>Submit 4</StyledButton>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Form.propTypes = {};

Form.defaultProps = {};
