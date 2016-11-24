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
        <li><span>Given known data, machine builds a model to predict given unknown data in the future.</span></li>
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
      <p><span>Data Modeling:</span></p>
      <ul>
        <li><span>Data Types: It's important to know the types of data since each data types need different ways to be processed. Original data may be converted to other types of data by modification. </span></li>
        <ul>
          <li><span>Numeric Data: a measurement or count.</span></li>
          <ul>
            <li><span>Discrete: whole numbers.</span></li>
            <li><span>Continuous: any number within range.</span></li>
          </ul>
            <li><span>Categorical Data: represents characteristics.</span></li>
          <ul>
            <li><span>may have numeric values but no mathematical meaning behind it.</span></li>
            <li><span>Ordinal Data is an ordered Categorical Data.</span></li>
          </ul>
            <li><span>Times-Series Data: collected via repeated measurements over time.</span></li>
          </ul>
            <li><span>Encoding: at the end of the process, computers process information in the form of bits. We want to give numeric form of inputs to computers so that they can easily deal with datasets and conduct tasks we asked for. Encoding converts data into another form and, in particular in the context of machine learning, into numeric data.</span></li>
            <li><span>One-Hot Encoding: a simple encoding that convert any categorical data attributes in numeric form. id. { Easy, Medium, Hard } -> { 0, 1, 2 }</span></li>
            <li><span>The Training Set Size and Accuracy: fundamentally, more data gives better machine learning modeling. </span></li>
      </ul>

      
    </div>
  );
}



export default Note;