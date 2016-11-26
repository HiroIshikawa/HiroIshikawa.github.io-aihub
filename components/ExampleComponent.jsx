import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function ExampleComponent({ children }) {
  return (
    <div>
      <p>
        This is example (modified to test.).
      </p>
      {children ||
        <div><Link to="/HiroIshikawa.github.io-me/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
        </Link></div>}
    </div>
  );
}

ExampleComponent.propTypes = propTypes;

export default ExampleComponent;
