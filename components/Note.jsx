import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function NoteComponent({ children }) {
  return (
    <div>
      <p>
        <p><span style="font-weight: 400;">Purpose of Machine Learning ( in my opinion ):</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">To let computers to predict. Prediction is to give a decision from known information.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">It&rsquo;s a division of Artificial Intelligence whose purpose is to build intelligence on machines/computers. Intelligence is the ability to acquire and apply knowledge and skills in broad sense. Learning is how we evolve. All the intellectual and physical activities are improved by learning and we try to achieve better results than yesterday. Machine Learning is a set of techniques to give this ability to learn computers. Computers and its networks are so good at handling a large set of information, computing and actuating things precisely and consistently, which exceeds human&rsquo;s ability on doing it in significant degree. The world gets complexed; we face many challenges everyday and need different approaches to deal with these. Computers are agents to help us to tackle these. Machine Learning gives computers to collaborate with us in the dynamically changing world. </span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">ML The Most Fundamental Components:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&ldquo;Given known data, machine builds a model to predict given unknown data in the future&rdquo;.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Dataset: Data that machine feeds in and builds a model based on.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Training Samples: selected data points from dataset to train and build a model. The part of rows in the dataset.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Attributes: variables that has set of domain values. All the columns of datasets.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Features: selected attributes to be learned and tested to build and verify a model. Part of the columns of datasets; correspond to the inputs of a model.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Label: selected attributes to be learned and tested to build and verify a model. Part of the columns of datasets; correspond to the output of a model.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Model: algorithm to compute an output from given data.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Prediction: output of the model given new input.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Test Samples: selected data points from dataset to test the built model.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Accuracy: how accurately the model predicted an output given a new input and true label output.</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Data Modeling:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Data Types: It&rsquo;s important to know the types of data since each data types need different ways to be processed. Original data may be converted to other types of data by modification. </span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Numeric Data: a measurement or count.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Discrete: whole numbers.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Continuous: any number within range.</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Categorical Data: represents characteristics.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">may have numeric values but no mathematical meaning behind it.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ordinal Data is an ordered Categorical Data.</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Times-Series Data: collected via repeated measurements over time.</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Encoding: at the end of the process, computers process information in the form of bits. We want to give numeric form of inputs to computers so that they can easily deal with datasets and conduct tasks we asked for. Encoding converts data into another form and, in particular in the context of machine learning, into numeric data.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">One-Hot Encoding: a simple encoding that convert any categorical data attributes in numeric form. id. { Easy, Medium, Hard } -&gt; { 0, 1, 2 }</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">The Training Set Size and Accuracy: fundamentally, more data gives better machine learning modeling. </span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Evaluation and Validation:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Dataset is splitted into training samples and testing samples. The independency between training and testing samples gives unbiased assessment on the model.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Computers need to predict using a model given new set of inputs. Practically, the model has to deal with independent different data inputs. Testing is a simulation for that assumption. It simulate the &ldquo;outside-of-the-box&rdquo; situation where machines feed newly observed data inputs and predict based on that.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">If a model constructed training gives poor performance on testing samples, it indicates that the model is not generalised enough; which is called &ldquo;overfitting&rdquo;. It&rsquo;s like a boxer who performs greatly in training room but very poorly in street fight. A good boxer can perform greatly in street fight too. (one&rsquo;s skill is generalized enough to fit in new situations.)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Metrics: different types of problems need different evaluation criterion.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Classification Metrics: </span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Classification has &ldquo;classes&rdquo;, which represents labeled outputs under predefined criterion. ie. animals classified to mammals, reptiles, birds, amphibians, and fish (classes of animals). </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Metrics functions as error detection criterion. We should pick the best metrics, accuracy, precision, recall etc.., in different problems. Depending on which side of errors we want to weigh on to detect, we choose metrics to evaluate a machine learning model performance. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Accuracy: </span></li>
</ul>
</ul>
<p><span style="font-weight: 400;">= # of Correctly Identified Instances in A Class / All Instances in That Class</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Confusion Matrix:</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Compare Actual Class and Predicted Class.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Both has positive or negative forming 2x2 matrix.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Favored Buckets (prediction and reality agree ):</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">True Positive - Predicted Positive and Actually Positive</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">True Negative- Predicted False and Actually False </span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Error Buckets (prediction and reality disagree ):</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">False Positive (aka. False Alarm) - Predicted Positive and Actually Negative</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">False Negative - Predicted Negative and Actually Positive</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">In general, we want to minimize both of errors. However, different problems have different ratio of favors between two errors.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">ie. Cancer Detection: we want to minimize False Negatives. We should never say &ldquo;you are fine&rdquo; (negative predicted = no cancer predicted) to the patients who actually developing cancers in their body (positive actually = cancer developing). We should say &ldquo;you need further diagnosis&rdquo; even if it turns out to be actually no cancers found at the end (False Positives)..</span></li>
</ul>
</ul>
</ul>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Precision and Recall: confusion matrix helps us to identify each buckets of classifier model&rsquo;s predictions and actuals. Precision and Recall numericalize a rate of errors for the two error cases. These are more specific versions of accuracy based on types of errors.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Precision: &ldquo;how many false alarms we made&rdquo;. The more false positives, we have less precision. The more falses we believe, the less we are precise. = True Positive / (True Positive + False Positive)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Recall: &ldquo;how many false ignorances we made&rdquo;. The more false negatives, we have less recall. The more truths we ignore, the worse we recall. = True Positives / (True Positive + False Negative)</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">F1 Score: now we have precision and recall scores. F1 score is the weighted average of precision and recalls so that it can reflect both of the errors in a class predictions. = 2 * (precision * recall ) / (precision + recall)</span></li>
</ul>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Regression Metrics:</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Mean Absolute Error</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Mean Squared Error</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Managing Error and Complexity:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Causes of errors. Now the question is that what is the cause of errors that a model can made. Computing the scoring for the performance of the model, we want to fix the causes of error in the next step.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Bias: the degree of unableness that a model represents complexity of the underlying data</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Variance: the degree of sensitivity that a model have to the limited data it has been.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Complexity affects both of bias and variance. We tune complexity of a model to minimize both bias and variance.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Curse of Dimensionality: &ldquo;As the number of features or dimensions grows, the amount of data we need to generalize accurately grows exponentially.&rdquo;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Learning Curves: graph that compares the performance of a model on training and testing data over a varying number of training instances. By splitting the training and testing data plots line separately, we measure the generalization performance of the model for unseen data. We would like to know the point where both training and testing set the highest accuracy of prediction (minimize error) and minimum data amount required. Y - any performance score, X - data amount</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">On Bias: the training and testing errors converge and are high. The model is too simple to represent underlying complexity of dataset. We need to figure out a way to achieve more complexity of the model ( adding more features etc.. )</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">On Variance: the gap between training and testing error is large. We can minimize the variance by increasing the amount of data to train and test or simplify the model by reducing features to the more important ones. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">A model tuning should aim at &ldquo;both the testing and training curves converge at similar values&rdquo; and &ldquo;the gap between the training and testing sets, is quite small&rdquo; on learning curve plots.</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Model Complexity Graph: Y - any performance score, X - complexity of model. Complexity of a model can be varied by tuning its inputs or parameters.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Validation Curves: Y - any performance score, X - varying parameters (specific complexity indicator)</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cross Validation: given datasets, any performance measurements needs the split of training and testing data. How we split the data affects the training and testing results. We would like to maximize the learning rate of training and validation rate of testing. We have several techniques to deal with this problem. </span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">K-Fold Cross Validation: Run K separate learning experiments, pick testing set, train, test, test on testing set. Average test results from those k experiments. Takes more time to train but gains more accuracy. </span></li>
</ul>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Type of Learnings:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Supervised Learning: </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Unsupervised Learning: </span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Supervised Learning</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Supervised Learning: build model given prior problem and answer. A machine computes a solution and it will be given an answer for it. The machine compares own solution and the answer given to calibrate the model. </span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Regression:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">estimate relationships among variables. Continuous. Usually, we pick up independent variables (features, x) and &ldquo;a&rdquo; dependent variable (label, y). The modeling is to construct a function that express the relationship while minimizing the errors between the estimation line representing continuous values and actual label values observed.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">The complexity of the regression model increases when we choose higher order of polynomial to make a model it. It will fit better for the training data but given new inputs it will give higher error rate. We need to choose order of polynomial carefully so that it has enough complexity and generalization. </span></li>
</ul>
<p><span style="font-weight: 400;">Decision Tree:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">is a classification learning algorithm. Classify an example with successive evaluation process following a tree structure. Target is the answer that tree generates and we construct a tree such that the accuracy of the prediction for target has higher match rate with actual target.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Attributes: The modeling process of the decision trees starts from defining attributes that we construct a tree based on. Each node represents an attribute and descendent edges represents a value of an attribute.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Best Attribute: separates samples more evenly and correctly. It should give more information into the process for the model to decide which class the sample should be labeled. Formally, the bestness of an attribute is evaluated by information gain. For each of the rest of attributes, we calculate the information gain and pick up the attribute that has highest value of information gain.</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Information Gain: how much information the set of inputs given to the computation process at the time add to the model. Gain = Entropy( Parent ) - [ Weighted Average ] * entropy ( Children )</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Adding more randomness or indecisiveness in the process between parent node to children node reduces information gain. Remember entropy is a degree of randomness given information = for each i, entropy += - Pi log base 2 Pi</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">ID3: Loop: pick best attribute A, assign A as decision attribute for node, for each value of A create a descendent of node, sort training examples to leaves, if examples perfectly classfied STOP else loop back to top</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">To make better result, tree should place best attribute on the top of the tree, choose correct classification, and shorter tree.</span></li>
</ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Continuous Values can be handled in Decision Tree process by giving range information. Note that the class is always discrete not continuous.</span></li>
</ul>
      </p>
    </div>
  );
}

NoteComponent.propTypes = propTypes;

export default NoteComponent;
