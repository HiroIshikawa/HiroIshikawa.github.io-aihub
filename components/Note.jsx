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
      
      <p>ML The Most Fundamental Components:
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
      </p>
      <p>
      <p><span>Data Modeling:</span></p>
      <ul>
      <li><span>Data Types: It&rsquo;s important to know the types of data since each data types need different ways to be processed. Original data may be converted to other types of data by modification. </span></li>
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
      <li><span>One-Hot Encoding: a simple encoding that convert any categorical data attributes in numeric form. id. { Easy, Medium, Hard } -&gt; { 0, 1, 2 }</span></li>
      <li><span>The Training Set Size and Accuracy: fundamentally, more data gives better machine learning modeling. </span></li>
      </ul>
      <p>&nbsp;</p>
      <p><span>Evaluation and Validation:</span></p>
      <ul>
      <li><span>Dataset is splitted into training samples and testing samples. The independency between training and testing samples gives unbiased assessment on the model.</span></li>
      <li><span>Computers need to predict using a model given new set of inputs. Practically, the model has to deal with independent different data inputs. Testing is a simulation for that assumption. It simulate the &ldquo;outside-of-the-box&rdquo; situation where machines feed newly observed data inputs and predict based on that.</span></li>
      <li><span>If a model constructed training gives poor performance on testing samples, it indicates that the model is not generalised enough; which is called &ldquo;overfitting&rdquo;. It&rsquo;s like a boxer who performs greatly in training room but very poorly in street fight. A good boxer can perform greatly in street fight too. (one&rsquo;s skill is generalized enough to fit in new situations.)</span></li>
      <li><span>Metrics: different types of problems need different evaluation criterion.</span></li>
      <li><span>Classification Metrics: </span></li>
      <ul>
      <li><span>Classification has &ldquo;classes&rdquo;, which represents labeled outputs under predefined criterion. ie. animals classified to mammals, reptiles, birds, amphibians, and fish (classes of animals). </span></li>
      <li><span>Metrics functions as error detection criterion. We should pick the best metrics, accuracy, precision, recall etc.., in different problems. Depending on which side of errors we want to weigh on to detect, we choose metrics to evaluate a machine learning model performance. </span></li>
      <li><span>Accuracy: </span></li>
      </ul>
      </ul>
      <p><span>= # of Correctly Identified Instances in A Class / All Instances in That Class</span></p>
      <ul>
      <li><span>Confusion Matrix:</span></li>
      <ul>
      <li><span>Compare Actual Class and Predicted Class.</span></li>
      <ul>
      <li><span>Both has positive or negative forming 2x2 matrix.</span></li>
      <ul>
      <li><span>Favored Buckets (prediction and reality agree ):</span></li>
      <ul>
      <li><span>True Positive - Predicted Positive and Actually Positive</span></li>
      <li><span>True Negative- Predicted False and Actually False </span></li>
      </ul>
      <li><span>Error Buckets (prediction and reality disagree ):</span></li>
      <ul>
      <li><span>False Positive (aka. False Alarm) - Predicted Positive and Actually Negative</span></li>
      <li><span>False Negative - Predicted Negative and Actually Positive</span></li>
      </ul>
      <li><span>In general, we want to minimize both of errors. However, different problems have different ratio of favors between two errors.</span></li>
      <ul>
      <li><span>ie. Cancer Detection: we want to minimize False Negatives. We should never say &ldquo;you are fine&rdquo; (negative predicted = no cancer predicted) to the patients who actually developing cancers in their body (positive actually = cancer developing). We should say &ldquo;you need further diagnosis&rdquo; even if it turns out to be actually no cancers found at the end (False Positives)..</span></li>
      </ul>
      </ul>
      </ul>
      </ul>
      <li><span>Precision and Recall: confusion matrix helps us to identify each buckets of classifier model&rsquo;s predictions and actuals. Precision and Recall numericalize a rate of errors for the two error cases. These are more specific versions of accuracy based on types of errors.</span></li>
      <ul>
      <li><span>Precision: &ldquo;how many false alarms we made&rdquo;. The more false positives, we have less precision. The more falses we believe, the less we are precise. = True Positive / (True Positive + False Positive)</span></li>
      <li><span>Recall: &ldquo;how many false ignorances we made&rdquo;. The more false negatives, we have less recall. The more truths we ignore, the worse we recall. = True Positives / (True Positive + False Negative)</span></li>
      </ul>
      <li><span>F1 Score: now we have precision and recall scores. F1 score is the weighted average of precision and recalls so that it can reflect both of the errors in a class predictions. = 2 * (precision * recall ) / (precision + recall)</span></li>
      </ul>
      <p>&nbsp;</p>
      <ul>
      <li><span>Regression Metrics:</span></li>
      </ul>
      <ul>
      <li><span>Mean Absolute Error</span></li>
      <li><span>Mean Squared Error</span></li>
      </ul>
      <p>&nbsp;</p>
      <p><span>Managing Error and Complexity:</span></p>
      <ul>
      <li><span>Causes of errors. Now the question is that what is the cause of errors that a model can made. Computing the scoring for the performance of the model, we want to fix the causes of error in the next step.</span></li>
      <li><span>Bias: the degree of unableness that a model represents complexity of the underlying data</span></li>
      <li><span>Variance: the degree of sensitivity that a model have to the limited data it has been.</span></li>
      <li><span>Complexity affects both of bias and variance. We tune complexity of a model to minimize both bias and variance.</span></li>
      <li><span>Curse of Dimensionality: &ldquo;As the number of features or dimensions grows, the amount of data we need to generalize accurately grows exponentially.&rdquo;</span></li>
      <li><span>Learning Curves: graph that compares the performance of a model on training and testing data over a varying number of training instances. By splitting the training and testing data plots line separately, we measure the generalization performance of the model for unseen data. We would like to know the point where both training and testing set the highest accuracy of prediction (minimize error) and minimum data amount required. Y - any performance score, X - data amount</span></li>
      <ul>
      <li><span>On Bias: the training and testing errors converge and are high. The model is too simple to represent underlying complexity of dataset. We need to figure out a way to achieve more complexity of the model ( adding more features etc.. )</span></li>
      <li><span>On Variance: the gap between training and testing error is large. We can minimize the variance by increasing the amount of data to train and test or simplify the model by reducing features to the more important ones. </span></li>
      <li><span>A model tuning should aim at &ldquo;both the testing and training curves converge at similar values&rdquo; and &ldquo;the gap between the training and testing sets, is quite small&rdquo; on learning curve plots.</span></li>
      </ul>
      <li><span>Model Complexity Graph: Y - any performance score, X - complexity of model. Complexity of a model can be varied by tuning its inputs or parameters.</span></li>
      <ul>
      <li><span>Validation Curves: Y - any performance score, X - varying parameters (specific complexity indicator)</span></li>
      </ul>
      <li><span>Cross Validation: given datasets, any performance measurements needs the split of training and testing data. How we split the data affects the training and testing results. We would like to maximize the learning rate of training and validation rate of testing. We have several techniques to deal with this problem. </span></li>
      <ul>
      <li><span>K-Fold Cross Validation: Run K separate learning experiments, pick testing set, train, test, test on testing set. Average test results from those k experiments. Takes more time to train but gains more accuracy. </span></li>
      </ul>
      </ul>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p><span>Type of Learnings:</span></p>
      <ul>
      <li><span>Supervised Learning: </span></li>
      <li><span>Unsupervised Learning: </span></li>
      </ul>
      <p>&nbsp;</p>
      <p><span>Supervised Learning</span></p>
      <ul>
      <li><span>Supervised Learning: build model given prior problem and answer. A machine computes a solution and it will be given an answer for it. The machine compares own solution and the answer given to calibrate the model. </span></li>
      </ul>
      <p>&nbsp;</p>
      <p><span>Regression:</span></p>
      <ul>
      <li><span>estimate relationships among variables. Continuous. Usually, we pick up independent variables (features, x) and &ldquo;a&rdquo; dependent variable (label, y). The modeling is to construct a function that express the relationship while minimizing the errors between the estimation line representing continuous values and actual label values observed.</span></li>
      <li><span>The complexity of the regression model increases when we choose higher order of polynomial to make a model for it. It will fit better for the training data but given new inputs it will give higher error rate. We need to choose order of polynomial carefully so that it has enough complexity and generalization. </span></li>
      </ul>
      <p><span>Decision Tree:</span></p>
      <ul>
      <li><span>is a classification learning algorithm. Classify an example with successive evaluation process following a tree structure. Target is the answer that tree generates and we construct a tree such that the accuracy of the prediction for target has higher match rate with actual target.</span></li>
      <li><span>Attributes: The modeling process of the decision trees starts from defining attributes that we construct a tree based on. Each node represents an attribute and descendent edges represents a value of an attribute.</span></li>
      <li><span>Best Attribute: separates samples more evenly and correctly. It should give more information into the process for the model to decide which class the sample should be labeled. Formally, the bestness of an attribute is evaluated by information gain. For each of the rest of attributes, we calculate the information gain and pick up the attribute that has highest value of information gain.</span></li>
      <ul>
      <li><span>Information Gain: how much information the set of inputs given to the computation process at the time add to the model. Gain = Entropy( Parent ) - [ Weighted Average ] * entropy ( Children )</span></li>
      <li><span>Adding more randomness or indecisiveness in the process between parent node to children node reduces information gain. Remember entropy is a degree of randomness given information = for each i, entropy += - Pi log base 2 Pi</span></li>
      </ul>
      <li><span>ID3: Loop: pick best attribute A, assign A as decision attribute for node, for each value of A create a descendent of node, sort training examples to leaves, if examples perfectly classified STOP else loop back to top</span></li>
      <ul>
      <li><span>To make better result, tree should place best attribute on the top of the tree, choose correct classification, and shorter tree.</span></li>
      </ul>
      <li><span>Continuous Values can be handled in Decision Tree process by giving range information. Note that the class is always discrete not continuous.</span></li>
      </ul>
      <p>&nbsp;</p>
      <p><span>Neural Networks:</span></p>
      <ul>
      <li><span>Perceptron model: the simplest neural network</span></li>
      <ul>
      <li><span>Unit: for each i, activation += xi*wi. If activation &gt;= firing threshold y = 1: y = 0.</span></li>
      </ul>
      <li><span>Perceptron Training : Given examples (X, y), find weights that map inputs ( X ) to outputs ( y ). There are two ways: Perceptron rule ( threshold ) or Gradient descent rule ( threshold )</span></li>
      <ul>
      <li><span>Perceptron Rule - Single Unit</span></li>
      <ul>
      <li><span>y : target</span></li>
      <li><span>y-hat : output by a perceptron unit</span></li>
      <li><span>a : learning rate</span></li>
      <li><span>x : an example from X</span></li>
      <li><span>Algorithm:</span></li>
      <ul>
      <li><span>w_i = w_i + delta-w_i</span></li>
      <ul>
      <li><span>where delta-w_i = a ( y - y-hat ) x_i</span></li>
      <ul>
      <li><span>where y-hat = [ for each i, &nbsp;&nbsp;y-hat += w_i*x_i ) &gt;= 0 ]</span></li>
      </ul>
      </ul>
      </ul>
      </ul>
      </ul>
      </ul>
      </p>
    </div>
  );
}



export default Note;