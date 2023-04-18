import React, { Component } from "react";
import Section from "./Feedback/Section/Section";
import Statistics from './Feedback/Statistics/Statistics';
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

class App extends Component  {

  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad
  };

  handleChenge = (option) => {
    const name = option.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback () {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = (good * 100) / total;
    return Math.round(positiveFeedbackPercentage);
  }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
   
        return (
            <div className="Widget">
            <Section title="Please leave feedback" />
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={this.handleChenge}
            />
            <Section title="Statistics" />
            {total === 0 ? 
              (<Notification message="No feedback given" />)
                :
              (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />) 
            }
            
            </div>
        );
    }
    
    
    }

export default App;

