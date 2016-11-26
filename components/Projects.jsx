import React from 'react';
import { Link } from 'react-router';

function Project() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
      <p>
      	The most recent proejct I am working on is the Robot Arm object detection with images. 
	    How can we point a particular object from an image or a video? 
	    First of all, we need to define the spec of inputs: 
	    <ul>
	    	<li>An image is a 2d matrix which each elements has its pixel values. </li>
	    	<li>A video is a stack of 2d matrix which ordered in the frame rate. </li>
	    </ul>
	    Lets think about processing an image for a object detection. 
	    Our goal is to detect a can of Coke from the iamge. 
	    What is the unique attribute that a can of Coke have? May be:
	    <ul>
	    	<li>Shape as a can</li>
	    	<li>Shape of Logo</li>
	    	<li>Color ratio (red / white)</li>
	    </ul>
	    We call these attributes as featuers.
	    We can do pattern match with these attributes.
	    <br></br>
	    <br></br>
	    



	    <br></br>
	    <br></br>
	    Second interesting part is the optimiazation part. 
	    To reduce the computation cost, we should minimize the number of processing images. 
	    Current promising approach for that is choosing images by sorting based on similarities scores between set of combination of images. 
      </p>
    </div>
  );
}

export default Project;