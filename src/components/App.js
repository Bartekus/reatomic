import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { GoogleTagManager } from 'containers';
import {
  AsyncHomePage,
  AsyncSamplePage,
  AsyncNotFoundPage,
} from './pages';

import theme from './themes/default';

injectGlobal`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <div>
      <GoogleTagManager />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={AsyncHomePage} exact />
          <Route path="/sample-page" component={AsyncSamplePage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
