import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import Projects from './components/Projects';
import Books from './components/Books';
import Blog from './components/Blog';
import Note from './components/Note';
import PageNotFound from './components/PageNotFound';
// import ExampleComponent from './components/ExampleComponent';
// import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';


// Routes

const routes = (
  <Route path="/HiroIshikawa.github.io-me" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />
    <Route path="projects" mapMenuTitle="Projects" component={Projects} />
    <Route path="books" mapMenuTitle="Books" component={Books} />
    <Route path="blog" mapMenuTitle="Blog" component={Blog} />
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
