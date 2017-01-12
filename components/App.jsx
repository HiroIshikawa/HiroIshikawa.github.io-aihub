import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  const repoLink = 'https://github.com/HiroIshikawa/HiroIshikawa.github.io-me';

  return (
    <div>   
      <div>
        
      </div>
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
        <a href="https://github.com/HiroIshikawa" className="extended-link">
          by <span className="link-style">Tak Ishikawa</span>
        </a>
      </div>
    </div>
  );
}
//<Link to="/HiroIshikawa.github.io-me/">Home</Link>
//<Link to="/HiroIshikawa.github.io-me/projects"> Projects |</Link>
//        <Link to="/HiroIshikawa.github.io-me/books"> Books |</Link>
//        <Link to="/HiroIshikawa.github.io-me/blog"> Blog |</Link>
//        <Link to="/HiroIshikawa.github.io-me/note"> Note</Link>

// <h1>me</h1>
//      <a href={repoLink}>https://github.com/HiroIshikawa/HiroIshikawa.github.io-me</a>

// <nav>
//  {generateMapMenu()}
// </nav>

App.propTypes = propTypes;

export default App;
