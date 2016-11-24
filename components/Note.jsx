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
      
      <p>ML The Most Fundamental Components:</p>
      <ul>
        <li>Given known data, machine builds a model to predict given unknown data in the future.</li>
        <li>Dataset: Data that machine feeds in and builds a model based on.</li>
        <li>Training Samples: selected data points from dataset to train and build a model. The part of rows in the dataset.</li>
        <li>Attributes: variables that has set of domain values. All the columns of datasets.</li>
        <li>Features: selected attributes to be learned and tested to build and verify a model. Part of the columns of datasets; correspond to the inputs of a model.</li>
        <li>Label: selected attributes to be learned and tested to build and verify a model. Part of the columns of datasets; correspond to the output of a model.</li>
        <li>Model: algorithm to compute an output from given data.</li>
        <li>Prediction: output of the model given new input.</li>
        <li>Test Samples: selected data points from dataset to test the built model.</li>
        <li>Accuracy: how accurately the model predicted an output given a new input and true label output.</li>
      </ul>
    </div>
  );
}



export default Note;