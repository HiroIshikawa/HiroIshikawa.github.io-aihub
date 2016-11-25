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
      	We tend to move around, dig shallow, and find nothing valualbe.
      	From no matter where, when digging deeply enough, you'll find valuable thing.
      	Truly valuable things are huge enough to be found from many directions.
      	It is the core. It locates at the very deep spot.
      	<br></br>
      	<br></br>
      	Why do we give up to dig deeply enough?
      	Because of fear of missing out.
      	How can we eliminate the fear of missing out?
      	Just keep digging. Just keep digging.
      	No matter what happens, just keep digging. 
      	Who is the most often causes the event that precents you from keep doing? 
      	Yourself. 
      	Do not give excuse to yourself for stop doing it. 
      	No matter what people say, just keep digging. 
      	Who is the most often tell you stop doing it? 
      	Youself. 
      	Do not give the moment to yourself for arguing.
      	Just keep digging.
      </p>
    <h2>Choice</h2>
      <p>
        The more choices we have, the happier we feel.
        How can we have more choices? 
        Stop reducing choices by yourself.
        I mean, we tend to narrow our chioces by the internal internal voice not external conditions. 
        The voice in our head tells "No, you cannot do that." 
        This is the real enemy. 
        You realizes more choices if you liberate your heart from the noise.
      </p>
    </div>
  );
}

export default Blog;