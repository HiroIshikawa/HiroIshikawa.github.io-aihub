import React from 'react';
import { Link } from 'react-router';

function About() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
      <p>
        About page.
      </p>
    <div><Link to="/HiroIshikawa.github.io-aihub/">Home</Link></div>
    <div><Link to="/HiroIshikawa.github.io-aihub/about">About</Link></div>
    <div><Link to="/HiroIshikawa.github.io-aihub/project">Project</Link></div>
    <div><Link to="/HiroIshikawa.github.io-aihub/books"></Link>Books</div>
    <div><Link to="/HiroIshikawa.github.io-aihub/blog"></Link>Blog</div>
    <div><Link to="/HiroIshikawa.github.io-aihub/note">Note</Link></div>
    </div>
  );
}

export default About;