import * as React from 'react';
import { Provider } from 'react-redux';

import { AppRoutes } from '../../components/App/routes';
import { store } from '../../components/App/store';
import { AuthProvider } from '../../modules/auth/AuthProvider';

import './style.scss';

export const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </Provider>
);
