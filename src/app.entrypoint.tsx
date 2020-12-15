import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppProviders } from './app.providers';
import { AppRouter } from './app.router';
import 'core/i18n/i18n.instance';

const App: React.FC = () => (
  <AppProviders>
    <AppRouter />
  </AppProviders>
);

ReactDOM.render(<App />, document.getElementById('root'));
