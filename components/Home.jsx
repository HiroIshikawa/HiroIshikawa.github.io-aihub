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
          Today, Feb 6, 2017, What I am doing:
          <ul>
            <li>Working on implementing linear training.</li>
            <li><a href="https://github.com/HiroIshikawa/object-recognizer" target="_blank">Better preconditioning for the next casacade training.</a></li>
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
          
          Current Routine (Jan 2017-):
          <ul>
            <li>Wake up at 4:30am, do exercise, take a shower, eat breakfast.</li>
            <li>Grab a coffee at 5:30am, practice algorithms, schedule a day.</li>
            <li>Study Operation System, or Machine Learning and Data Mining at school.</li>
            <li>Eat lunch at 12:30pm, review progress so far, and share ideas.</li>
            <li>Work on object recognition system building for a robotics project,</li>
            <li>Work on machine learning + crypto application development, or</li>
            <li>Learn computer vision and deep learning in Udacity's self-driving vehicle nanodegree.</li>
            <li>Eat dinner at 6:00pm, review progress so far, and share ideas.</li>
            <li>Keep working.</li>
            <li>Read a new book on science, technology, evolution, art, design, or psychology.</li>
            <li>Write a quick summary and thoughts on the reading.</li>
            <li>Update website with any progress on learnings, projects, or readings.</li>
            <li>Go to bed at 10am.</li>
          </ul>

          <br></br>

          I love reading books and papers. As of Jan 31, 2017, I am reading or listening
          <br></br>
          <a href="https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026" target="_blank"> The War of Art: Break Through the Blocks and Win Your Inner Creative Battles by Steven Pressfield</a>
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
