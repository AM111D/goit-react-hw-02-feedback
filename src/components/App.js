// import FeedBack from './FeedBack/FeedBack';
import React, { Component } from 'react';
import Statistics from './FeedBack/Statistics ';
import StatisticsButtons from './FeedBack/StatisticButtons';

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
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

        <StatisticsButtons />

        <h4>Statistics</h4>

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
