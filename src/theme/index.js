import { createMuiTheme } from '@material-ui/core';

import palette from './palette';

const theme = createMuiTheme({
  palette,
   breakpoints: {
    values: {
      xs: 0,
      sm: 740,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
 
});

export default theme;
