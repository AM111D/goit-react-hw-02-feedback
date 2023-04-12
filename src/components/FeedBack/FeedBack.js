import React, { Component } from 'react';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedBackIsGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  feedBackIsNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  feedBackIsBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const postiveFeedback = (good * 100) / total;
    return Math.round(postiveFeedback);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="feedBack">
          <button type="button" onClick={this.feedBackIsGood}>
            Good
          </button>
          <button type="button" onClick={this.feedBackIsNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.feedBackIsBad}>
            Bad
          </button>
          <h4>Statistics</h4>
        </div>

        <ul>
          <li>
            Good:<span>{this.state.good}</span>
          </li>
          <li>
            Neutral:<span>{this.state.neutral}</span>
          </li>
          <li>
            Bad:<span>{this.state.bad}</span>
          </li>
          <li>
            Total:<span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            Postive feeback:
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      </>
    );
  }
}

export default FeedBack;
