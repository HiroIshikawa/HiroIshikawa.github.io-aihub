import React from 'react';
import { Link } from 'react-router';

function Blog() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
    <p>I put the most recent blog entry here. I put archives on Medium.</p>
    <h2>Dig Deeply</h2>
      <p>
      	We tend to move around, dig shallow, and find nothing valualbe.
      	From no matter where, when digging deeply enough, you'll find valuable thing.
      	Truly valuable things are huge enough to be found from many direction.
      	It is the core. It locates at very deep spot.
      	<br></br>
      	Why do we give up to dig deeply enough?
      	Because of fear of missing out.
      	How can we eliminate the fear of missing out?
      	Just keep digging. Do not get back to the surface.
      </p>
    </div>
  );
}

export default Blog;