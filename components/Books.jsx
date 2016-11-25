import React from 'react';
import { Link } from 'react-router';

function Books() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';
  const sovereignLink = 'https://www.amazon.com/Sovereign-Individual-Mastering-Transition-Information/dp/0684832720';

  return (
    <div>
      <p>
        Books Page.
        <ul>
        	<li><a href={sovereignLink} target="_blank">The Sovereign Individual — Mastering the Transition to the Information Age by James Dale Davidson, William Ress-Mogg </a>
        	gives you a hint to live better in 21st century.</li>
        </ul>

      </p>
    </div>
  );
}

export default Books;