import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const AppProviders: React.FC = ({ children }) => {
  const theme = createMuiTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
