import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToastProvider } from 'react-toast-notifications';
import { AuthContext } from 'common/authorization/auth.context';
export const AppProviders: React.FC = ({ children }) => {
  const theme = createMuiTheme();
  const [context, setContext] = React.useState('');
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={[context, setContext]}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={3000}
          placement="bottom-center"
        >
          {children}
        </ToastProvider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};
