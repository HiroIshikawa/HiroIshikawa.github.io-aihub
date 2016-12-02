import React from 'react';
import { Link } from 'react-router';

function Project() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';
  const objectRecogWikiLink = 'https://en.wikipedia.org/wiki/Outline_of_object_recognition';
  const surfVideoLink = 'https://www.youtube.com/watch?v=ZXn69V-1kEM';
  const acRcLink = 'https://zhengludwig.wordpress.com/projects/self-driving-rc-car/';
  const haarTrainLink = 'http://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html';
  const cvCascadeLink = 'http://docs.opencv.org/2.4/modules/objdetect/doc/cascade_classification.html';
  const cvCascadeTrainLink = 'http://docs.opencv.org/2.4/doc/user_guide/ug_traincascade.html';
  const cvVideoCapLink = 'http://docs.opencv.org/2.4/modules/highgui/doc/reading_and_writing_images_and_video.html#videocapture-set';

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
		<br></br>
		<br></br>
		We determine to use SURF for real-time object detection with OpenCV. 
		<a href={surfVideoLink} target="_blank"> this video </a>
		introduces very well about theory and implementation the SURF real-time object detection.
		.
		<br></br>
		<br></br>
		To find a particular object, we may use Haar-Cascade Classifiers.
		<a href={acRcLink} target="_blank"> This Self Driving RC Car by Zheng Wang </a>
		explains how to implement real-time object detection with Haar-Cascade Classifiers.
		More details on how to train the classifier can be found 
		<a href={haarTrainLink} target="_blank"> a post by Thorsten Ball </a>
		.
		<br></br>
		<br></br>
		OpenCV supports Cascade Classification.
		<a href={cvCascadeLink} target="_blank"> Official OpenCV Document on Cascade Classification </a>
		gives explanation about its theoritical background and implementation. 
		Cascade Classifier Training process is explained 
		<a href={cvCascadeTrainLink} target="_blank"> here</a>
		. 
		I recommend to refer to the official document when actually implementing the Cascade Classifier with OpenCV. 
		<br></br>
		<br></br>
		Quick note on Cascade Classifier with OpenCV:
		<ul>
			<li>To train, we separate training data to positive examples and negative ones.</li>
			<li>Positive exampels should include the target object.</li>
			<li>Depending on the generalization level of the object, we need more positive examples to train.</li>
			<li>ie. to recognize faces, we need hundreds or even thousands of images of faces with variety features.</li>
			<li>Positive examples can be generated from one or a few images with OpenCV build-in function, opencv_createsamples.</li>
			<li>Negative examples must not include the target object.</li>
			<li>Negative examples should be made manually.</li>
			<li>Negative examples sometimes called background samples or background sample images.</li>
			<li>Opencv provides many <a href={cvCascadeTrainLink} target="_blank"> command line arguments </a> to prepare examples for classification.</li>
			<li>To capture images from a video, OpenCV has <a href={cvVideoCapLink}> VideoCapture function</a>.</li>
			<li>OpenCV, opencv_traincascade, fucntion train prepared examples.</li>
			<li>1. Common arguments: specify basic information to train.</li>
			<li>2. Cascade parameters: specify stage type (only boosted classifier is supported today), feature type (Haar-like feature or local binary petterns), and width and height (should exactly same values as used during training samples creation). </li>
			<li>3. Boosted classfier parameters: type, minimal desired hit rate, max false alarm rate, weight trim rate, max depth, and max weak count.</li>
			<li>4. Haar-like feature parameters: mode (BASIC:use only upright features, or ALL:full set of upright and 45 degree rotated feature set).</li>
			<li>5. Local Binary Patterns parameters: no param available.</li>
		</ul>
		</p>

		<br></br>
		<h1>3D Image Reconstruction Optimization</h1>
		<p>
			I am involving another project which is about 3D image reconstruction optimization.
			The first aim is to minimimze the number of images to reconstrcut the optimal result of 3D mapping.
			The second aim is to maximize the number of points reconstruted on the 3d mapping space.
			To do this, we compare each pair of iamges in the image data base to look at similarity.
			We sort the images based on the preference of the value.
			This sorting ordering depends on heuristic which generate the similarity scores.
			We would like to produce better scores on these.
			Once we calculate the similarity scores, we put each of set into an array.
			We sort the array based on the similarity score in ascending order.
			This sorted images will be evaluated in the colmap reconstruction process.
			We will record the number of images used and the points generated for each 10 subset of the ordered images from the top.
			We process this with other heuristics too and compare the result.
			Using the optimization goal, we will find the best heuristic function.
		</p>
    </div>
  );
}

export default Project;