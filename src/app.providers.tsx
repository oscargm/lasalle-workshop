import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToastProvider } from 'react-toast-notifications';
import { AuthProvider } from './common/authorization';
export const AppProviders: React.FC = ({ children }) => {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="bottom-center"
      >
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
