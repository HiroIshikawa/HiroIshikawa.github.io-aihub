import React, { PropTypes } from 'react';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <p>
      Page not found - the path, <code>{location.pathname}</code>,
      did not match any React Router routes.
    </p>
    <div><Link to="/HiroIshikawa.github.io-aihub/">Home</Link></div>
    <div><Link to="/HiroIshikawa.github.io-aihub/about">About</Link></div>
    <div><Link to="/HiroIshikawa.github.io-aihub/project">Project</Link></div>
    <div><Link to="/HiroIshikawa.github.io-aihub/books"></Link>Books</div>
    <div><Link to="/HiroIshikawa.github.io-aihub/blog"></Link>Blog</div>
    <div><Link to="/HiroIshikawa.github.io-aihub/note">Note</Link></div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
