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
      <p>
        To use SSH with browser activated, ssh -L 8888:localhost:8889 username@remote_host; and in the host CLI ipython notebook --no-browser --port=8889
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

      <p>Data Modeling:</p>
      <ul>
      <li>Data Types: Its important to know the types of data since each data types need different ways to be processed. Original data may be converted to other types of data by modification. </li>
      <ul>
      <li>Numeric Data: a measurement or count.</li>
      <ul>
      <li>Discrete: whole numbers.</li>
      <li>Continuous: any number within range.</li>
      </ul>
      <li>Categorical Data: represents characteristics.</li>
      <ul>
      <li>may have numeric values but no mathematical meaning behind it.</li>
      <li>Ordinal Data is an ordered Categorical Data.</li>
      </ul>
      <li>Times-Series Data: collected via repeated measurements over time.</li>
      </ul>
      <li>Encoding: at the end of the process, computers process information in the form of bits. We want to give numeric form of inputs to computers so that they can easily deal with datasets and conduct tasks we asked for. Encoding converts data into another form and, in particular in the context of machine learning, into numeric data.</li>
      <li>One-Hot Encoding: a simple encoding that convert any categorical data attributes in numeric form. id. [ Easy, Medium, Hard ] -> [ 0, 1, 2 ]</li>
      <li>The Training Set Size and Accuracy: fundamentally, more data gives better machine learning modeling. </li>
      </ul>

      <p>Evaluation and Validation:</p>
      <ul>
      <li>Dataset is splitted into training samples and testing samples. The independency between training and testing samples gives unbiased assessment on the model.</li>
      <li>Computers need to predict using a model given new set of inputs. Practically, the model has to deal with independent different data inputs. Testing is a simulation for that assumption. It simulate the outside-of-the-box situation where machines feed newly observed data inputs and predict based on that.</li>
      <li>If a model constructed training gives poor performance on testing samples, it indicates that the model is not generalised enough; which is called overfitting. Its like a boxer who performs greatly in training room but very poorly in street fight. A good boxer can perform greatly in street fight too. (ones skill is generalized enough to fit in new situations.)</li>
      <li>Metrics: different types of problems need different evaluation criterion.</li>
      <li>Classification Metrics: </li>
      <ul>
      <li>Classification has classes, which represents labeled outputs under predefined criterion. ie. animals classified to mammals, reptiles, birds, amphibians, and fish (classes of animals). </li>
      <li>Metrics functions as error detection criterion. We should pick the best metrics, accuracy, precision, recall etc.., in different problems. Depending on which side of errors we want to weigh on to detect, we choose metrics to evaluate a machine learning model performance. </li>
      <li>Accuracy: </li>
      </ul>
      </ul>
      <p>= # of Correctly Identified Instances in A Class / All Instances in That Class</p>
      <ul>
      <li>Confusion Matrix:</li>
      <ul>
      <li>Compare Actual Class and Predicted Class.</li>
      <ul>
      <li>Both has positive or negative forming 2x2 matrix.</li>
      <ul>
      <li>Favored Buckets (prediction and reality agree ):</li>
      <ul>
      <li>True Positive - Predicted Positive and Actually Positive</li>
      <li>True Negative- Predicted False and Actually False </li>
      </ul>
      <li>Error Buckets (prediction and reality disagree ):</li>
      <ul>
      <li>False Positive (aka. False Alarm) - Predicted Positive and Actually Negative</li>
      <li>False Negative - Predicted Negative and Actually Positive</li>
      </ul>
      <li>In general, we want to minimize both of errors. However, different problems have different ratio of favors between two errors.</li>
      <ul>
      <li>ie. Cancer Detection: we want to minimize False Negatives. We should never say you are fine (negative predicted = no cancer predicted) to the patients who actually developing cancers in their body (positive actually = cancer developing). We should say you need further diagnosis even if it turns out to be actually no cancers found at the end (False Positives)..</li>
      </ul>
      </ul>
      </ul>
      </ul>
      <li>Precision and Recall: confusion matrix helps us to identify each buckets of classifier models predictions and actuals. Precision and Recall numericalize a rate of errors for the two error cases. These are more specific versions of accuracy based on types of errors.</li>
      <ul>
      <li>Precision: how many false alarms we made. The more false positives, we have less precision. The more falses we believe, the less we are precise. = True Positive / (True Positive + False Positive)</li>
      <li>Recall: how many false ignorances we made. The more false negatives, we have less recall. The more truths we ignore, the worse we recall. = True Positives / (True Positive + False Negative)</li>
      </ul>
      <li>F1 Score: now we have precision and recall scores. F1 score is the weighted average of precision and recalls so that it can reflect both of the errors in a class predictions. = 2 * (precision * recall ) / (precision + recall)</li>
      </ul>
      
      <ul>
      <li>Regression Metrics:</li>
      </ul>
      <ul>
      <li>Mean Absolute Error</li>
      <li>Mean Squared Error</li>
      </ul>
      
      <p>Managing Error and Complexity:</p>
      <ul>
      <li>Causes of errors. Now the question is that what is the cause of errors that a model can made. Computing the scoring for the performance of the model, we want to fix the causes of error in the next step.</li>
      <li>Bias: the degree of unableness that a model represents complexity of the underlying data</li>
      <li>Variance: the degree of sensitivity that a model have to the limited data it has been.</li>
      <li>Complexity affects both of bias and variance. We tune complexity of a model to minimize both bias and variance.</li>
      <li>Curse of Dimensionality: As the number of features or dimensions grows, the amount of data we need to generalize accurately grows exponentially.</li>
      <li>Learning Curves: graph that compares the performance of a model on training and testing data over a varying number of training instances. By splitting the training and testing data plots line separately, we measure the generalization performance of the model for unseen data. We would like to know the point where both training and testing set the highest accuracy of prediction (minimize error) and minimum data amount required. Y - any performance score, X - data amount</li>
      <ul>
      <li>On Bias: the training and testing errors converge and are high. The model is too simple to represent underlying complexity of dataset. We need to figure out a way to achieve more complexity of the model ( adding more features etc.. )</li>
      <li>On Variance: the gap between training and testing error is large. We can minimize the variance by increasing the amount of data to train and test or simplify the model by reducing features to the more important ones. </li>
      <li>A model tuning should aim at both the testing and training curves converge at similar values and the gap between the training and testing sets, is quite small on learning curve plots.</li>
      </ul>
      <li>Model Complexity Graph: Y - any performance score, X - complexity of model. Complexity of a model can be varied by tuning its inputs or parameters.</li>
      <ul>
      <li>Validation Curves: Y - any performance score, X - varying parameters (specific complexity indicator)</li>
      </ul>
      <li>Cross Validation: given datasets, any performance measurements needs the split of training and testing data. How we split the data affects the training and testing results. We would like to maximize the learning rate of training and validation rate of testing. We have several techniques to deal with this problem. </li>
      <ul>
      <li>K-Fold Cross Validation: Run K separate learning experiments, pick testing set, train, test, test on testing set. Average test results from those k experiments. Takes more time to train but gains more accuracy. </li>
      </ul>
      </ul>
      
      
      <p>Type of Learnings:</p>
      <ul>
      <li>Supervised Learning: </li>
      <li>Unsupervised Learning: </li>
      </ul>
      
      <p>Supervised Learning</p>
      <ul>
      <li>Supervised Learning: build model given prior problem and answer. A machine computes a solution and it will be given an answer for it. The machine compares own solution and the answer given to calibrate the model. </li>
      </ul>
      
      <p>Regression:</p>
      <ul>
      <li>estimate relationships among variables. Continuous. Usually, we pick up independent variables (features, x) and a dependent variable (label, y). The modeling is to construct a function that express the relationship while minimizing the errors between the estimation line representing continuous values and actual label values observed.</li>
      <li>The complexity of the regression model increases when we choose higher order of polynomial to make a model for it. It will fit better for the training data but given new inputs it will give higher error rate. We need to choose order of polynomial carefully so that it has enough complexity and generalization. </li>
      </ul>
      <p>Decision Tree:</p>
      <ul>
      <li>is a classification learning algorithm. Classify an example with successive evaluation process following a tree structure. Target is the answer that tree generates and we construct a tree such that the accuracy of the prediction for target has higher match rate with actual target.</li>
      <li>Attributes: The modeling process of the decision trees starts from defining attributes that we construct a tree based on. Each node represents an attribute and descendent edges represents a value of an attribute.</li>
      <li>Best Attribute: separates samples more evenly and correctly. It should give more information into the process for the model to decide which class the sample should be labeled. Formally, the bestness of an attribute is evaluated by information gain. For each of the rest of attributes, we calculate the information gain and pick up the attribute that has highest value of information gain.</li>
      <ul>
      <li>Information Gain: how much information the set of inputs given to the computation process at the time add to the model. Gain = Entropy( Parent ) - [ Weighted Average ] * entropy ( Children )</li>
      <li>Adding more randomness or indecisiveness in the process between parent node to children node reduces information gain. Remember entropy is a degree of randomness given information = for each i, entropy += - Pi log base 2 Pi</li>
      </ul>
      <li>ID3: Loop: pick best attribute A, assign A as decision attribute for node, for each value of A create a descendent of node, sort training examples to leaves, if examples perfectly classified STOP else loop back to top</li>
      <ul>
      <li>To make better result, tree should place best attribute on the top of the tree, choose correct classification, and shorter tree.</li>
      </ul>
      <li>Continuous Values can be handled in Decision Tree process by giving range information. Note that the class is always discrete not continuous.</li>
      </ul>
      
      <p>Neural Networks:</p>
      <ul>
      <li>Perceptron model: the simplest neural network</li>
      <ul>
      <li>Unit: for each i, activation += xi*wi. If activation >= firing threshold y = 1: y = 0.</li>
      </ul>
      <li>Perceptron Training : Given examples (X, y), find weights that map inputs ( X ) to outputs ( y ). There are two ways: Perceptron rule ( threshold ) or Gradient descent rule ( threshold )</li>
      <ul>
      <li>Perceptron Rule - Single Unit</li>
      <ul>
      <li>y : target</li>
      <li>y-hat : output by a perceptron unit</li>
      <li>a : learning rate</li>
      <li>x : an example from X</li>
      <li>Algorithm:</li>
      <ul>
      <li>w_i = w_i + delta-w_i</li>
      <ul>
      <li>where delta-w_i = a ( y - y-hat ) x_i</li>
      <ul>
      <li>where y-hat = [ for each i, y-hat += w_i*x_i ) >= 0 ]</li>
      </ul>
      </ul>
      </ul>
      </ul>
      </ul>
      </ul>

      <p>Difference of Accuracy and F-Score</p>
      <p>
        <ul>
        <li>In short, accuracy does not care about the preference on either labels valuse but F-score does.</li>
        <li>When we have any preference on the value of the labels, we should introduce F-1 score to evaluate models.</li>
        <li>Accuracy: number of right predictions / number of total predictions</li>
        <li>F-1 score: weighted average of precision and recall: 2 * (precision * recall ) / (precision + recall)</li>
        <li>Precision: true positives / (true positives + false positives) </li>
        <li>Recall: false positives / (true positives + false negatices) </li>
        </ul>
      </p>
      
      <p>Unsupervised Learning</p>
      <p>
      <ul>
      <li>Unsupervised learning discover patterns in data without labels (no supervision).</li>
      <li>By knowing some classes in data, we can find further </li>
      </ul>
      </p>

      <p>Clustering</p>
      <p>
      <ul>
      <li>A cluster is formed by a set of examples that has certain similarity in common.</li>
        <ul>
        <li>Single Linkage Clustering:</li>
        <li>consider each object a (n objects).</li>
        <li>define inter cluster distance as the distance between the closest two points in the two clusters.</li>
        <li>merge two closest clusters.</li>
        <li>repeat n-k times to make k-clusters.</li>
        </ul>
      <li>The issue of single linkage clustering: it make cluster chaining the closest node making unexpected clusters.</li>
      <li>Soft Clustering: clusters are identified via similarity measures which includes distance, connectivity, and intensity.</li>
        <ul>
          <li>data points can potentially belond to multiple clusters.</li>
          <li>to handle multiple assignments to different clusters, each node has membership grades which indicate the degree to which data points belong to each cluster.</li>
        </ul>
      <li>Maximum Likelihood Gaussian: given samples and parameters, it attempts to maximize the likelihood trying different configucations of parameters for samples.</li>
      <li>Log-Likelihood Estimation: maximize the natural log of the likelihood above. The benefit relies on log's property: strictly increasing function.</li>
      <li>Expectation-maximization (EM): iterative method for finding maximum likelihood or maximum a posteriori estimates of parameters in statistical models, where the model depends on unobserved latent variables.</li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
      </p>
      
      </p>
    </div>
  );
}



export default Note;