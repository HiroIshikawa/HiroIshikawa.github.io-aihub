import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';
import Note from './components/Note';

// Routes

const routes = (
  <Route path="/HiroIshikawa.github.io-aihub" mapMenuTitle="Home" component={App}>
    <IndexRoute path="/HiroIshikawa.github.io-aihub" component={Home} />
    <Route path="note" mapMenuTitle="Note" component={Note} />
    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

// Nested Root Example:
//<Route path="/HiroIshikawa.github.io-aihub/example" mapMenuTitle="Example" component={ExampleComponent}>
//  <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
//</Route>

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
