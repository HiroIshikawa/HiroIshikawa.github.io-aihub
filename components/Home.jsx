import React from 'react';
import { Link } from 'react-router';

function Home() {
  const githubLink = 'https://github.com/HiroIshikawa';
  const linkedInLink = 'https://www.linkedin.com/in/takahiroishikawa';
  const mediumLink = 'https://medium.com/@tk2bit';
  const myTwLink = 'https://twitter.com/tk2bit';
  const bestBooksLink = 'https://medium.com/@tk2bit/reading-list-2263ec754ab4#.pe2d4ps4h';

  return (
    <div>
      <header>
        <br></br>
        <h2 align="center">Tak Ishikawa</h2>
        <img id="avatar" src="./assets/images/avatar.jpg" align="center"/>        
        <p>
          Hi! Welcome to my website!
          <br></br>
          <br></br>
          Today, Feb 17, 2017, What I am doing:
          <ul>
            <li>Working on os simulater for different scheduling algorithms.</li>
            <li><a href="https://github.com/HiroIshikawa/object-recognizer" target="_blank">Object detection integrated with robotic arm control system.</a></li>
          </ul>
          
          <br></br>
          Coding:
          <a href={githubLink} target="_blank"> @HiroIshikawa</a>
          <br></br>
          Experience:
          <a href={linkedInLink} target="_blank"> LinkedIn</a>
          <br></br>
          Writing: 
          <a href={mediumLink} target="_blank"> Medium</a>
          <br></br>
          Stream:
          <a href={myTwLink} target="_blank"> @tk2bit</a>
          <br></br>
          Contact: hiro52ishikawa@gmail.com
          
          <br></br>
          <br></br>
          
          Practicing
          <a href="https://medium.com/@tk2bit/deliverable-and-cadence-10595cc4d099#.1clcpk5fu" target="_blank"> "Deliverable and Cadence"</a>

          <br></br>
          <br></br>
          
          I love reading books and papers. As of Feb 17, 2017, I am reading or listening
          <br></br>
          <a href="https://www.amazon.com/Language-Truth-Logic-Western-Philosophy/dp/0486200108/ref=sr_1_1?ie=UTF8&qid=1487400731&sr=8-1&keywords=language+truth+and+logic" target="_blank"> Language, Truth and Logic by Alfred J. Ayer, Sir Alfred Jules Ayer</a>
          <br></br>
          <br></br>
          <a href={bestBooksLink} target="_blank">I reviewed impressive books I have read.</a>
        
                    
          <br></br>
        </p>
      </header>
    </div>
  );
}

          // A list of reoccuring questions I have kept asking in the projects I have been working:
          // <ul>
          //   <li>"How do people interect with a website? How can we persuade people to pay more attention to our product?</li>
          //   <li>"How can "</li>
          //   <li></li>
          //   <li></li>
          //   <li></li>
          // </ul>

export default Home;
