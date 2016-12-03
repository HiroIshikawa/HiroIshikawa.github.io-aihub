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
  const dmInstaDcLink = 'https://www.instagram.com/p/4m53p0vB7h/?taken-by=drivemodeapp';
  const mifosPRLink = 'https://github.com/openMF/community-app/pull/1541';
  const mifosXLink = 'http://mifos.org/mifos-x/';
  const instaPhotoLink = 'https://github.com/HiroIshikawa/21playground/tree/master/instaphoto';
  const twentyOneLink = 'https://21.co/';
  const hxPodLink = 'http://www.hyperxite.com/pod/';
  const podCompeLink = 'http://www.spacex.com/hyperloop';
  const uciRobotArmLink = 'https://github.com/ucirobotarm/UCI_Robot_Arm';
  const hxLink = 'http://www.hyperxite.com/';
  const meLink = 'https://github.com/HiroIshikawa/HiroIshikawa.github.io-me';

  // Projects

  // Books
  const warOfArtLink = 'https://www.amazon.com/War-Art-Steven-Pressfield-ebook/dp/B007A4SDCG';
  const meditationsLink = 'https://www.amazon.com/Meditations-Thrift-Editions-Marcus-Aurelius-ebook/dp/B008TVLRU4/ref=sr_1_7?s=digital-text&ie=UTF8&qid=1479982480&sr=1-7&keywords=Meditation';
  const onIntelLink = 'https://www.amazon.com/Intelligence-Jeff-Hawkins-ebook/dp/B003J4VE5Y/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1479982621&sr=1-1&keywords=on+intelligence';

  const bestBooksLink = 'https://medium.com/@tk2bit/reading-list-2263ec754ab4#.pe2d4ps4h';
  const readABookEverydayLink = 'https://medium.com/@tk2bit/how-to-read-a-book-everyday-6c02d443011e#.zctt7vpb1';

  // Blog
  const mediumLink = 'https://medium.com/@tk2bit';
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
          I am a senior CS student at
          <a href={icsLink} target="_blank"> UC Irvine</a>
          , previously an intern at Drivemode as 
          <a href={dmLink} target="_blank"> website developer</a>
          , and as 
          <a href={dmInstaDcLink} target="_blank"> data engineer (a.k.a. data cowboy)</a>
          , commited on 
          <a href={mifosXLink} target="_blank"> MifosX (Fineract) opensource project</a>
          , built 
          <a href={instaPhotoLink} target="_blank"> bitcoin apps </a> 
          on
          <a href={twentyOneLink} target="_blank"> 21 platform</a>
          , worked for 
          <a href={hxPodLink} target="_blank"> controls and telemetry system team in Hyperloop UCI</a>
          , currently 
          <a href={uciRobotArmLink} target="_blank"> building object detection application for UCI Robot Arm project</a>
          , 
          <a href={hxLink} target="_blank"> managing the website of Hyperloop UCI team</a>
          , 
          <Link to="/HiroIshikawa.github.io-me/note"> pursing Machine Learning Engineer Nanodegree program</Link> 
          , and 
          <a href={meLink} target="_blank"> maintaining this website</a>
          .
          <br></br>
          <br></br>
          I tweet/retweet as
          <a href={myTwLink} target="_blank"> @tk2bit</a>
          .
          <br></br>
          Please say hi to: hiro52ishikawa@gmail.com
          <br></br>
          <br></br>
          This website is powered by 
          <a href={reactLink} target="_blank"> React</a>
          , configured with
          <a href={reactCreateLink} target="_blank"> react-create</a>
          , hosted on
          <a href={ghPagesLink} target="_blank"> Github Pages</a>
          .
          <br></br>
          <a href={reactCreateGhDeploy} target="_blank"> This how to deploy react-create app on Github Pages.</a>

          <a></a>
        </p>
        <br></br>
        <h1>Projects</h1>
        <p>
          I am sharing recent updates including more technical details
          <Link to="/HiroIshikawa.github.io-me/projects"> in projects page</Link>
          .
        </p>
        <br></br>
        <h1>Books</h1>
        <p>
          I love reading books. As of Nov 16, 2016, I am reading/listening circurately 
          <ul>
            <li><a href={warOfArtLink} target="_blank">The War of Art: Winning the Inner Creative Battle by Steven Pressfield</a></li>
            <li><a href={meditationsLink} target="_blank">Meditations by Marcus Aurelius</a></li>
            <li><a href={onIntelLink} target="_blank">On Intelligence by Jeff Hawkins, Sandra Blakeslee</a></li>
          </ul>
          <br></br>
          <a href={bestBooksLink} target="_blank">I reviewed impressive books I have read </a>
          and 
          <a href={readABookEverydayLink} target="_blank"> share a secret tip to read a book everyday.</a>
          <br></br>
          <br></br>
          I am listing all the books at 
          <Link to="/HiroIshikawa.github.io-me/books"> books page</Link> 
          .
          I format the list in "[Book Title] allows you...".<br></br>
          I hope this format helps you to find the knowledge you need instantly. 

        </p>
        <br></br>
        <h1>Blog</h1>
        <p>
          I put the most recent entry at
          <Link to="/HiroIshikawa.github.io-me/blog"> the blog page</Link> 
          .
          <br></br>
          <br></br>
          I archive entries on 
          <a href={mediumLink} target="_blank"> Medium</a>
          . 
          You'll see my thoughts on AI, Crypto, VR/AR, and Education. 
          <br></br>
          These all are quick readings.
          <br></br>
          <br></br>
          I am practicing writing simplily. This is motivated by 
          <a href={theDayYouBecomeAGoodWriterLink} target ="_blank"> an entry by the Dilber's writer, Scott Adams</a>
          .
        </p>
        <br></br>
        <h1>Note</h1>
        <p>
          Here, I am leaving a note about anyhting I am learning.
          <br></br>
          If you are interested in, please visit 
          <Link to="/HiroIshikawa.github.io-me/note"> note page</Link> 
          .
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
