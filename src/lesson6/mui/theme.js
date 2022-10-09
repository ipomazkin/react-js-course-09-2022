import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7027b9'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: '15px',
          paddingRight: '15px',
        }
      }
    }
  }
})