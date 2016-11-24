import React from 'react';
import { Link } from 'react-router';

function Note() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
      <p>
        ML Note based on <a href={udacityNdLink}>udacity ML nanodegree</a>. 
      </p>
      <p>
        You can access the google doc I am constantly updating: <a href={mlGDocNoteLink}> ML Note</a>. 
      </p>
      <p>
        <p><span>Machine Learning:</span></p>
        <ul>
          <li><span>To let computers to predict. Prediction is to give a decision from known information.</span></li>
          <li><span>It&rsquo;s a division of Artificial Intelligence whose purpose is to build intelligence on machines/computers. Intelligence is the ability to acquire and apply knowledge and skills in broad sense. Learning is how we evolve. All the intellectual and physical activities are improved by learning and we try to achieve better results than yesterday. Machine Learning is a set of techniques to give this ability to learn computers. Computers and its networks are so good at handling a large set of information, computing and actuating things precisely and consistently, which exceeds human&rsquo;s ability on doing it in significant degree. The world gets complexed; we face many challenges everyday and need different approaches to deal with these. Computers are agents to help us to tackle these. Machine Learning gives computers to collaborate with us in the dynamically changing world. </span></li>
        </ul>
      </p>
    </div>
  );
}

export default Note;