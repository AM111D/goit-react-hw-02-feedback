// import FeedBack from './FeedBack/FeedBack';
import React, { Component } from 'react';
import Statistics from './FeedBack/Statistics ';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChenge = option => {
    const name = option.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
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
    if (total === 0) {
      return 0;
    }
    const postiveFeedback = (good * 100) / total;
    return Math.round(postiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="feedBack">
          <button
            type="button"
            onClick={() => this.handleChenge({ name: 'good' })}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => this.handleChenge({ name: 'neutral' })}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => this.handleChenge({ name: 'bad' })}
          >
            Bad
          </button>
          <h4>Statistics</h4>
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      </>
    );
  }
}

export default App;
