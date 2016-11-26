import React from 'react';
import { Link } from 'react-router';

function Project() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';
  const objectRecogWikiLink = 'https://en.wikipedia.org/wiki/Outline_of_object_recognition';

  return (
    <div>
    	<h2>Object Detection</h2>
	 	<h1>Extraction and Matching</h1>
		<p>
		The most recent proejct I am working on is the Robot Arm object detection with images. 
		How can we point a particular object from an image or a video? 
		<br></br>
		First of all, we need to define the spec of inputs: 
		<ul>
			<li>An image is a 2d matrix which each elements has its pixel values. </li>
			<li>A video is a stack of 2d matrix which ordered in the frame rate. </li>
		</ul>
		<br></br>
		Lets think about processing an image for a object detection. 
		Our goal is to detect a can of Coke from the iamge. 
		<br></br>
		What is the unique attribute that a can of Coke have? May be:
		<ul>
			<li>Shape as a can</li>
			<li>Shape of Logo</li>
			<li>Color ratio (red / white)</li>
		</ul>
		<br></br>
		We call these attributes as featuers.
		We can do pattern match with these attributes.
		Before moving on, I recommend you to go over 
		<a href={objectRecogWikiLink} target="_blank"> Outline of object recognition (Wikipedia) </a>
		.
		</p>
		<br></br>
		<h1>Optimization</h1>
		<p>
		Second interesting part is the optimiazation part. 
		To reduce the computation cost, we should minimize the number of processing images. 
		Current promising approach for that is choosing images by sorting based on similarities scores between set of combination of images. 
		</p>
    </div>
  );
}

export default Project;