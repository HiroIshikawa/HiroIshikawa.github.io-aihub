import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';

  return (
    <div>
      <p>
      To build thoughtful AI.
      </p>
      <div><Link to="/HiroIshikawa.github.io-aihub/about"> About </Link>
      <Link to="/HiroIshikawa.github.io-aihub/project"> Project </Link>
      <Link to="/HiroIshikawa.github.io-aihub/books"> Books </Link>
      <Link to="/HiroIshikawa.github.io-aihub/blog"> Blog </Link>
      <Link to="/HiroIshikawa.github.io-aihub/note"> Note </Link></div>
    </div>
  );
}

export default Home;
