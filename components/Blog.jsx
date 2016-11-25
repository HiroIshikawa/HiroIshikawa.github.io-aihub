import React from 'react';
import { Link } from 'react-router';

function Blog() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
    <p>I put the most recent blog entry here. I put archives on Medium.</p>
    <h2>Depth</h2>
      <p>
      	We move around, dig shallow, and find nothing valualbe.
      	From no matter where, when digging deeply enough, you'll find something valuable.
      	Valuable things are huge enough to be found from many directions.
      	It is the core. It locates at the very deep spot.
      	Keep digging.
      	No matter what happens, keep digging. 
      	Don't give excuses to stop. 
      	No matter what people say, keep digging. 
      	Don't make any moment to argue.
      	Keep digging.
      </p>
    <h2>Choice</h2>
      <p>
        The more choices we have, the happier we feel.
        How can we have more choices? 
        Stop reducing choices.
        I mean, we tend to narrow our chioces by the internal internal voice. 
        The voice in our head tells "No, you cannot do that." 
        This is the real enemy. 
        You realizes more choices if you liberate your heart from the noise.
      </p>
    <h2>Meditation</h2>
      <p>
        Listen to the silence. 
        Be aware of the sound of nothingness. 
        Look at the air. 
        Be aware of the color of emptiness. 
        Travel here. 
        Be the present.
      </p>
    </div>
  );
}

export default Blog;