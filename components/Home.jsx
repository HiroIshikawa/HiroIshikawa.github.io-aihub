import React from 'react';
import { Link } from 'react-router';

function Home() {
  // about me
  const reactLink = 'https://github.com/facebook/react';
  const reactCreateLink = 'https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html';
  const ghPagesLink = 'https://pages.github.com/';
  const reactCreateGhDeploy = 'https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages';
  const myTwLink = 'https://twitter.com/tk2bit';
  const icsLink = 'https://www.ics.uci.edu/';
  const dmLink = 'https://drivemode.com/';
  const dmTopSuLink = 'https://twitter.com/Drivemode/status/801953164446441473';
  const dmInstaDcLink = 'https://www.instagram.com/p/4m53p0vB7h/?taken-by=drivemodeapp';
  const mifosPRLink = 'https://github.com/openMF/community-app/pull/1541';
  const mifosXLink = 'http://mifos.org/mifos-x/';
  const instaPhotoLink = 'https://github.com/HiroIshikawa/21playground/tree/master/instaphoto';
  const twentyOneLink = 'https://21.co/';
  const hxPodLink = 'http://www.hyperxite.com/pod/';
  const podCompeLink = 'http://www.spacex.com/hyperloop';
  const uciRobotArmLink = 'https://github.com/HiroIshikawa/object-recognizer';
  const hxLink = 'http://www.hyperxite.com/';
  const meLink = 'https://github.com/HiroIshikawa/HiroIshikawa.github.io-me';

  // deploy
  const githubLink = 'https://github.com/HiroIshikawa';

  const mediumLink = 'https://medium.com/@tk2bit';

  const linkedInLink = 'https://www.linkedin.com/in/takahiroishikawa';

  const deployBlog = 'https://medium.com/@tk2bit/deploy-d490509408a6#.2rgfu3klq'; 

  const bestBooksLink = 'https://medium.com/@tk2bit/reading-list-2263ec754ab4#.pe2d4ps4h';
  const readABookEverydayLink = 'https://medium.com/@tk2bit/how-to-read-a-book-everyday-6c02d443011e#.zctt7vpb1';

  // Blog
  
  const theDayYouBecomeAGoodWriterLink = 'http://blog.dilbert.com/post/127310496506/the-day-you-became-a-better-writer-2nd-look';

  const grammerMistakeLink = 'http://blog.hubspot.com/marketing/common-grammar-mistakes-list#sm.000006f0ciqynnctuq0frvuzsngng';

  // Note


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
          Today, Jan 15, 2017, I am mainly working on designing and implementing neural nets from scratch.
          I just shared a post for learning neural nets from scratch as 
          <a href="https://medium.com/@tk2bit/a-lightning-path-to-understand-neural-networks-nns-1ba32d1b1785#.2swpgsk1e" target="_blank"> a medium post.</a>
          Also, working on the real-time image analysis that allows a robot to 
          <a href="https://github.com/HiroIshikawa/object-recognizer" target="_blank"> recognize target objects.</a>
          <br></br> 
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
          
          Living on 
          <a href={deployBlog} target="_blank"> "Deploy"</a>

          <br></br>
          <br></br>
          
          Current Routine (Jan 2017-):
          <ul>
            <li>Wake up at 4:30am, do meditative exercise, take a hydrotherapy shower, eat breakfast.</li>
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

          I love reading books. As of Jan 15, 2017, I am reading or listening
          <br></br>
          <a href="https://www.amazon.com/dp/1904838022?tag=sivers-20" target="_blank"> When Cultures Collide - by Richard D. Lewis</a>
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
