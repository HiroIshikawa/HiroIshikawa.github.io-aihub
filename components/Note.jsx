import React from 'react';
import { Link } from 'react-router';

function Note() {
  const udacityNdLink = 'https://www.udacity.com/nanodegree';
  const mlGDocNoteLink = 'https://docs.google.com/document/d/1gTmQ2BlEUNaJBtbQn0ilKq-KfU64lcE5jRhmROP72ZU/edit?usp=sharing';

  return (
    <div>
      <p>
        ML Note based on <a href={udacityNdLink} target="_blank">udacity ML nanodegree </a>. 
      </p>
      <p>
        You can access the most recent version of the note on google doc: <a href={mlGDocNoteLink} target="_blank"> ML Note</a>. 
      </p>
      
      <p><span>ML The Most Fundamental Components:</span></p>
      <ul>
      <li><span>&ldquo;Given known data, machine builds a model to predict given unknown data in the future&rdquo;.</span></li>
      </ul>
      <ul>
      <li><span>Dataset: Data that machine feeds in and builds a model based on.</span></li>
      </ul>
      <ul>
      <li><span>Training Samples: selected data points from dataset to train and build a model. The part of rows in the dataset.</span></li>
      <li><span>Attributes: variables that has set of domain values. All the columns of datasets.</span></li>
      <li><span>Features: selected attributes to be learned and tested to build and verify a model. Part of the columns of datasets; correspond to the inputs of a model.</span></li>
      <li><span>Label: selected attributes to be learned and tested to build and verify a model. Part of the columns of datasets; correspond to the output of a model.</span></li>
      <li><span>Model: algorithm to compute an output from given data.</span></li>
      <li><span>Prediction: output of the model given new input.</span></li>
      <li><span>Test Samples: selected data points from dataset to test the built model.</span></li>
      <li><span>Accuracy: how accurately the model predicted an output given a new input and true label output.</span></li>
      </ul>
      <p>&nbsp;</p>
      
    </div>
  );
}



export default Note;