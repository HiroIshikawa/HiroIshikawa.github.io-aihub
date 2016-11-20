import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function NoteComponent({ children }) {
  return (
    <div>
      <p>
        This is test for ML Note.
      </p>
    </div>
  );
}

NoteComponent.propTypes = propTypes;

export default NoteComponent;
