import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';

  return (
    <div>
      <header>
        <br></br>
        <h2>Tak Ishikawa</h2>
        <img id="avatar" src="./assets/images/avatar.jpg" />        
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
        <h1>Project</h1>
        <p>
        </p>
        <br></br>
        <h1>Books</h1>
        <p>
        </p>
        <br></br>
        <h1>Blog</h1>
        <p>
        </p>
        <br></br>
        <h1>Note</h1>
        <p>
        </p>
      </header>
    </div>
  );
}

export default Home;
