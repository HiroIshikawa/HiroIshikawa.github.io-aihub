import React from 'react';
import { Link } from 'react-router';

function Blog() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
      <p>
        Blog Page.
      </p>
    <div><Link to="/HiroIshikawa.github.io-aihub/">Home</Link></div>
    </div>
  );
}

export default Blog;