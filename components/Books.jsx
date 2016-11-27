import React from 'react';
import { Link } from 'react-router';

function Books() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';
  const sovereignLink = 'https://www.amazon.com/Sovereign-Individual-Mastering-Transition-Information/dp/0684832720';
  const zeroToOneLink = 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296';
  const sixEasyPiecesLink = 'https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained/dp/0465025277';
  const meditationsLink = 'https://www.amazon.com/Meditations-Penguin-Great-Marcus-Aurelius-ebook/dp/B00C9SRN5Q/ref=mt_kindle?_encoding=UTF8&me=';

  return (
    <div>
      <p>
        Books Page.
        <ul>
        	<li><a href={sovereignLink} target="_blank">The Sovereign Individual — Mastering the Transition to the Information Age by James Dale Davidson, William Ress-Mogg </a>
        	helps you to thrive in in 21st century.</li>
          <li><a href={zeroToOneLink} target="_blank">Zero to One: Notes on Startups, or How to Build the Future by Peter Thiel, Blake Masters </a>
          helps you to be right while others are wrong.</li>
          <li><a href={sixEasyPiecesLink} target="_blank">Six Easy Pieces: Essentials of Physics Explained by Its Most Brilliant Teacher by Richard P. Feynman</a>
          helps you to have a scientist's mindset and know foundation of physics.</li>
          <li><a href={meditationsLink} target="_blank">Meditations by Marcus Aurelius</a>
          helps you to be a better version of yourself.</li>
        </ul>

      </p>
    </div>
  );
}

export default Books;