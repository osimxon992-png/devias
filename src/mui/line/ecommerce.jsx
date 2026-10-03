import { createTheme } from '@mui/material/styles';

const ecommerce = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#5c68f6', // Rasmdagi ko'k/indigo chiziq rangi
    },
    secondary: {
      main: '#ff8c00', // Rasmdagi to'q sariq nuqtali chiziq rangi
    },
    text: {
      secondary: '#8a94a6', // Pastki sanalar rangi
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
});

export default ecommerce;