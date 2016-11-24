import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';

  return (
    <div>
      <header>
        <h1>Tak Ishikawa</h1>
        <p>
          I am a senior CS student at
          <a href="https://www.ics.uci.edu/" target="_blank">UC Irvine</a>
          , previously interned at Drivemode as 
          <a href="https://drivemode.com/" target="_blank">website developer</a>
          , and as 
          <a href="https://www.instagram.com/p/4m53p0vB7h/?taken-by=drivemodeapp" target="_blank">data engineer (a.k.a. data cowboy)</a>
          , worked on 
          <a href="https://github.com/openMF/community-app/pull/1541" target="_blank">Mifos X opensource project</a>
          , built 
          <a href="https://github.com/HiroIshikawa/21playground" target="_blank">bitcoin apps on 21 bitcoin platform</a>
          , helped implementing controls system of 
          <a href="http://www.hyperxite.com/pod/" target="_blank">Hyperloop UCI pod</a>
          , currently am working on 
          <a href="https://github.com/ucirobotarm/UCI_Robot_Arm" target="_blank">image processing for UCI Robot Arm project</a>
          , maintaining 
          <a href="http://www.hyperxite.com/" target="_blank">the website of Hyperloop UCI team</a>
          , and pursing 
          <a href="https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing" target="_blank">Machine Learning Engineer Nanodegree program</a>
          .
        </p>
      </header>
    </div>
  );
}

export default Home;
