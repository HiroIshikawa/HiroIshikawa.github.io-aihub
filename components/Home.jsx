import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';

  return (
    <div>
      <header>
        <br></br>
        <h2 align="center">Tak Ishikawa</h2>
        <img id="avatar" src="./assets/images/avatar.jpg" align="center"/>        
        <p>
          I am a senior CS student at
          <a href="https://www.ics.uci.edu/" target="_blank"> UC Irvine</a>
          , previously an intern at Drivemode as 
          <a href="https://drivemode.com/" target="_blank"> website developer</a>
          , and as 
          <a href="https://www.instagram.com/p/4m53p0vB7h/?taken-by=drivemodeapp" target="_blank"> data engineer (a.k.a. data cowboy)</a>
          , worked on 
          <a href="https://github.com/openMF/community-app/pull/1541" target="_blank"> MifosX (Fineract) opensource project</a>
          , built 
          <a href="https://github.com/HiroIshikawa/21playground/tree/master/instaphoto" target="_blank"> bitcoin apps on 21 bitcoin platform</a>
          , 
          <a href="http://www.hyperxite.com/pod/" target="_blank"> implemented controls logic of the pod of Hyperloop UCI</a>
          <a href="http://www.spacex.com/hyperloop" target="_blank">, which is competing in Hyperloop Pod Competition by SpaceX</a>
          , currently 
          <a href="https://github.com/ucirobotarm/UCI_Robot_Arm" target="_blank"> building object detection application for UCI Robot Arm project</a>
          , 
          <a href="http://www.hyperxite.com/" target="_blank"> maintaining the website of Hyperloop UCI team</a>
          , 
          <a href="https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing" target="_blank"> pursing Machine Learning Engineer Nanodegree program</a>
          , and 
          <a href="https://github.com/HiroIshikawa/HiroIshikawa.github.io-aihub" target="_blank"> building this website.</a>
          <a></a>
        </p>
        <br></br>
        <h1>Projects</h1>
        <p>
          The most recent proejct I am working on is the Robot Arm object detection with images.
          Interesting part is the optimiazation part. 
          To reduce the computation cost, we should minimize the number of processing images. 
          Current promising approach for that is choosing images by sorting based on similarities scores between set of combination of images. 
          <br></br>
          I am sharing recent updates including more technical details
          <a href="https://hiroishikawa.github.io/HiroIshikawa.github.io-aihub/projects" target="_blank"> in the projects page</a>
          .
        </p>
        <br></br>
        <h1>Books</h1>
        <p>
          I love reading books. As of Nov 16, 2016, I am reading circurately 
          <ul>
            <li><a href="https://www.amazon.com/War-Art-Steven-Pressfield-ebook/dp/B007A4SDCG" target="_blank">The War of Art: Winning the Inner Creative Battle by Stecen Pressfield</a></li>
            <li><a href="https://www.amazon.com/Meditations-Thrift-Editions-Marcus-Aurelius-ebook/dp/B008TVLRU4/ref=sr_1_7?s=digital-text&ie=UTF8&qid=1479982480&sr=1-7&keywords=Meditation" target="_blank">Meditations by Marcus Aurelius</a></li>
            <li><a href="https://www.amazon.com/Intelligence-Jeff-Hawkins-ebook/dp/B003J4VE5Y/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1479982621&sr=1-1&keywords=on+intelligence" target="_blank">On Intelligence by Jeff Hawkins, Sandra Blakeslee</a></li>
          </ul>
          <a href="https://medium.com/@tk2bit/reading-list-2263ec754ab4#.pe2d4ps4h" target="_blank">I am handpicking some recommended books</a>
          and
          <a href="https://medium.com/@tk2bit/reading-list-2263ec754ab4#.pe2d4ps4h" target="_blank"> sharing a secret tip to read a book everyday.</a>
        </p>
        <br></br>
        <h1>Blog</h1>
        <p>
          <a href="https://medium.com/@tk2bit" target="_blank">I write and share on Medium</a>
          .
        </p>
        <br></br>
        <h1>Note</h1>
        <p>
          Note is for sharing anything about AI. This part if kind a legacy part of previouts contents but I still love it.
          <a href="https://hiroishikawa.github.io/HiroIshikawa.github.io-aihub/note" target="_blank"> Please visit the Note page</a> 
          .
        </p>
      </header>
    </div>
  );
}

export default Home;
